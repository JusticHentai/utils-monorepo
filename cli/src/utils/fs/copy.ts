import fs from 'fs-extra'

const copy = async (sourcePath: string, targetPath: string) => {
  console.log('sourcePath', {
    sourcePath,
    targetPath,
  })
  try {
    const res = await fs.copy(sourcePath, targetPath, {
      filter: (path) => {
        console.log('path', path)
        let isIgnore = false

        for (const ignoreFile of ['node_modules', 'dist']) {
          if (!path.includes(ignoreFile)) {
            continue
          }

          isIgnore = true
          break
        }

        return !isIgnore
      },
    })

    return [res, undefined]
  } catch (error) {
    return [undefined, error]
  }
}

export default copy
