import i from './commands/i'
import md from './commands/md'
import p from './commands/p'
import u from './commands/u'

export interface CommandConfig {
  command: string
  description: string
  action: (...params: any[]) => Promise<void>
}

export const COMMAND_CONFIG: Array<CommandConfig> = [
  {
    command: 'u [message]',
    description: 'git 更新三连',
    action: u,
  },
  {
    command: 'i <name>',
    description: '利用 utils-template 在 packages 内新建名字为 name 的新工具',
    action: i,
  },
  {
    command: 'md [obsidianPath]',
    description: '根据 ts 文件生成 README.md 文件并同步到 obsidian',
    action: md,
  },
  {
    command: 'p [version]',
    description: '发布到 npm',
    action: p,
  },
]
