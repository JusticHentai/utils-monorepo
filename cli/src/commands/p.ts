import CommandOptions from '../types/CommandOptions'
import jsonRead from '../utils/file/jsonRead'
import jsonWrite from '../utils/file/jsonWrite'
import gitUpdate from '../utils/git/gitUpdate'

const p: CommandOptions = {
  name: 'p',
  dec: '一键 publish 当前包',
  action: async () => {
    await updatePackageJsonVersion()
    await gitUpdate('版本更新')
  },
}

export default p

async function updatePackageJsonVersion() {
  const oldInfo = await jsonRead('./package.json')
  const version = oldInfo.version

  const versionSplit = version.split('.')
  const lowVersion = versionSplit[versionSplit.length - 1]
  const newVersion = +lowVersion + 1
  versionSplit[versionSplit.length - 1] = newVersion

  const newInfo = { ...oldInfo, ...{ version: versionSplit.join() } }

  await jsonWrite('./package.json', newInfo)
}
