import { CommandOptions } from '@/core/types'
import { Command } from 'commander'

class Commander {
  program: Command

  constructor() {
    this.program = new Command()
  }

  add(options: CommandOptions): Promise<any> {
    const { name, dec: commandDec, args = [], argOptions = [] } = options

    return new Promise((resolve) => {
      let myCommand = new Command(name).description(commandDec)

      for (const { arg, dec, required } of args) {
        if (!arg) {
          return
        }

        const argName = required ? `<${arg}>` : `[${arg}]`

        myCommand = myCommand.argument(argName, dec)
      }

      for (const { flags, dec } of argOptions) {
        if (!flags) {
          return
        }

        myCommand = myCommand.option(flags, dec)
      }

      myCommand = myCommand.action((...params) => {
        let res = {}

        let i = 0
        for (; i < args.length; i++) {
          const { arg } = args[i]

          const argRes = params[i]

          res = { ...res, [arg]: argRes }
        }

        if (argOptions.length > 0) {
          res = { ...res, ...params[i] }
        }

        resolve(res)
      })

      this.program.addCommand(myCommand)
    })
  }

  init() {
    this.program.parse(process.argv)
  }
}

const command = new Commander()

export default command
