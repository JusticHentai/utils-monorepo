import CommandOptions from '../types/CommandOptions'
import command from '../utils/command'
import i from './i'
import p from './p'
import test from './test'
import u from './u'
import upgrade from './upgrade'

/**
 * 注册命令
 */
export default function registerCommand() {
  for (const commandOptions of commandList) {
    commandInit(commandOptions)
  }

  command.init()
}

/**
 * 命令表
 */
export const commandList: CommandOptions[] = [u, i, p, upgrade, test]

/**
 * 执行命令注册
 */
async function commandInit(commandOptions: CommandOptions) {
  const { action, ...rest } = commandOptions

  const res = await command.add({
    ...rest,
  })

  action && action(res)
}
