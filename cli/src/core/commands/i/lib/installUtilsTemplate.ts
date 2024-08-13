import addSubModule from './addSubModule'
import createCacheFolder from './createCacheFolder'
import createRepo from './createRepo'
import createTemplate from './createTemplate'
import deleteCacheFolder from './deleteCacheFolder'
import setPackageJson from './setPackageJson'

const installUtilsTemplate = async (name: string) => {
  await createCacheFolder()

  await createTemplate(name)

  await setPackageJson(name)

  await createRepo(name)

  await deleteCacheFolder()

  await addSubModule(name)
}

export default installUtilsTemplate
