import { Project } from 'ts-morph'
import { INDEX_PATH } from '../constants'

const createMD = async (dir: string) => {
  const project = new Project({
    tsConfigFilePath: `${dir}/tsconfig.json`,
  })

  const sourceFile = project.getSourceFileOrThrow(`${dir}/${INDEX_PATH}`)
  const exportDeclarations = sourceFile.getExportDeclarations()

  for (const item of exportDeclarations) {
    console.log(item)
  }
}

export default createMD
