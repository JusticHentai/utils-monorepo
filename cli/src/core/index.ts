import commandList from '@/core/commandList'
import { CommandOptions } from '@/core/types'
import command from '@/utils/command'

const commandHandle = async () => {
  for (const commandOptions of commandList) {
    commandInit(commandOptions)
  }

  command.init()
}

export default commandHandle

const commandInit = async (commandOptions: CommandOptions) => {
  const { action, ...rest } = commandOptions

  const res = await command.add({
    ...rest,
  })

  action?.(res)
}
