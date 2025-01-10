import log from '../logger'

/**
 * 添加字体
 */
const addFont = async (
  url: string,
  name: string
): Promise<[FontFace, undefined] | [undefined, Error]> => {
  return new Promise((resolve) => {
    const font = new FontFace(name, `url(${url})`)

    font
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont)
        resolve([font, undefined])
      })
      .catch((err) => {
        log.error('[preloadFont] err: ', err, url)
        resolve([undefined, err])
      })
  })
}

export default addFont
