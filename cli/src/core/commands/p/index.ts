import { CommandOptions } from '@/core/types'
import readJson from '@/utils/fs/readJson'
import writeJson from '@/utils/fs/writeJson'
import gitUpdate from '@/utils/git/gitUpdate'
import shell from '@/utils/shell'

const p: CommandOptions = {
  name: 'p',
  dec: '一键 publish 当前包',
  action: async () => {
    await updatePackageJsonVersion()
    await gitUpdate('版本更新')
    shell('pnpm publish')
  },
}

export default p

async function updatePackageJsonVersion() {
  const oldInfo = await readJson('./package.json')
  const version = oldInfo.version

  const versionSplit = version.split('.')
  const lowVersion = versionSplit[versionSplit.length - 1]
  const newVersion = +lowVersion + 1
  versionSplit[versionSplit.length - 1] = newVersion

  const newInfo = { ...oldInfo, ...{ version: versionSplit.join('.') } }

  await writeJson('./package.json', newInfo)
}
