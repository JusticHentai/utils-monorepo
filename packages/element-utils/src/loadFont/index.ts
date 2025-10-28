/**
 * 加载字体,并添加到 document.fonts 中
 * @param url 字体文件地址
 * @param name 字体名称
 * @returns 加载结果
 */
const loadFont = async (
  url: string,
  name: string
): Promise<[FontFace | undefined, Error | undefined]> => {
  return new Promise((resolve) => {
    const font = new FontFace(name, `url(${url})`)

    font
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont)
        resolve([loadedFont, undefined])
      })
      .catch((err) => resolve([undefined, err]))
  })
}

export default loadFont
