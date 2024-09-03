import { CommandOptions } from '@/core/types'
import shell from '@/utils/shell'

const upgrade: CommandOptions = {
  name: 'upgrade',
  dec: '一键更新 utils monorepo 到最新',
  action: async () => {
    const commands = [
      'git pull',
      'git submodule update --init',
      'git submodule foreach --recursive git checkout main',
      'git submodule foreach --recursive git pull',
      'pnpm i',
      'git submodule foreach --recursive pnpm build',
    ]

    await shell(commands)
  },
}

export default upgrade
