import CommandOptions from '../types/CommandOptions'
import getLib from '../utils/file/getLib'
import shell from '../utils/shell'

const upgrade: CommandOptions = {
  name: 'upgrade',
  dec: '一键更新 utils monorepo 到最新',
  action: async () => {
    const commands = ['git pull', 'git submodule update --init']
    await shell(commands)

    const lib = await getLib('packages')
    for (const dir of lib) {
      const commands = [
        `cd packages/${dir}`,
        'git checkout main',
        'git pull',
        'cd ../..',
      ]

      await shell(commands)
    }
  },
}

export default upgrade
