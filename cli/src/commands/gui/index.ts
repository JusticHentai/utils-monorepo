import { COMMAND_CONFIG, CommandConfig } from '@/constants'
import { logger, parseCommand } from '@justichentai/node-utils'
import inquirer from 'inquirer'

const gui = async () => {
  const choices = COMMAND_CONFIG.map((config) => config.command)

  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: '请选择一个命令',
    choices: choices,
  })

  const command = COMMAND_CONFIG.find(
    (config) => config.command === answers.command
  ) as CommandConfig

  const { required, optional } = parseCommand(command.command)

  console.log({
    required,
    optional,
  })

  // 顺序不对 先用着 规定先输入必填参数 再输入可选参数
  const arg = []

  for (const requiredArg of required) {
    const { requiredArg: res } = await inquirer.prompt({
      type: 'input',
      name: requiredArg,
      message: `请输入[${requiredArg}]：`,
    })

    if (!res) {
      logger.error(`必填参数[${requiredArg}]不能为空`)
    }

    arg.push(res)
  }

  for (const optionalArg of optional) {
    const { optionalArg: res } = await inquirer.prompt({
      type: 'input',
      name: optionalArg,
      message: `请输入[${optionalArg}]：`,
    })

    arg.push(res)
  }

  await command.action(...arg)
}

export default gui
