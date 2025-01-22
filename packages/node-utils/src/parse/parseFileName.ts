import path from 'path'

const parseFileName = (filePath: string): { name: string; extend: string } => {
  const parse = path.parse(filePath)

  return {
    name: parse.name,
    extend: parse.ext,
  }
}

export default parseFileName
