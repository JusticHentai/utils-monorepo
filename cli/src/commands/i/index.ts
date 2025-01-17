import copyTemplate from './core/copyTemplate'
import createFolder from './core/createFolder'
import setPackageJson from './core/setPackageJson'
import setReadMe from './core/setReadMe'

const i = async (name: string) => {
  await createFolder(name)

  await copyTemplate(name)

  await setPackageJson(name)

  await setReadMe(name)
}

export default i
