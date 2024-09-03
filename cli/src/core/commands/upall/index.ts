import { CommandOptions } from '@/core/types'
import cd from '@/utils/fs/cd'
import shell from '@/utils/shell'
import path from 'path'

const upall: CommandOptions = {
  name: 'upall',
  dec: 'git 更新三连所有一起',
  args: [
    {
      arg: 'message',
      dec: 'git commit 的信息',
      required: false,
    },
  ],
  action: async (options: { message: string }) => {
    const { message } = options

    const commands = [
      'git submodule foreach --recursive git add .',
      `git submodule foreach --recursive git commit -m ${message || '普通更新'}`,
      'git submodule foreach --recursive git push',
      'git submodule foreach --recursive pnpm build',
    ]

    await shell(commands)

    const currentPath = path.resolve()
    const pathList = currentPath.split('\\')
    const index = pathList.indexOf('utils-monorepo')
    let count = pathList.length - 1 - index

    while (count > 0) {
      cd('..')
      count--
    }

    const command2 = ['git add .', `git commit -m ${message}`, 'git push']

    await shell(command2)

    cd('cli')
    shell('pnpm build')
  },
}

export default upall
