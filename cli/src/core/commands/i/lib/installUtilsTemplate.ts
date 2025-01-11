import createNewFolder from './createNewFolder'
import createTemplate from './createTemplate'
import setPackageJson from './setPackageJson'
import setREADME from './setREADME'

const installUtilsTemplate = async (name: string) => {
  await createNewFolder(name)

  await createTemplate(name)

  await setPackageJson(name)

  await setREADME(name)
}

export default installUtilsTemplate
