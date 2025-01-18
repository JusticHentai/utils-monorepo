import gitPush from './core/gitPush'
import pnpmPublish from './core/publish'
import upVersion from './core/upVersion'

const p = async (versionInput?: string) => {
  await upVersion(versionInput)

  await gitPush()

  await pnpmPublish()
}

export default p
