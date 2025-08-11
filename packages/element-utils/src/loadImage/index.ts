/**
 * 加载图片
 * @param url 图片地址
 * @returns 加载结果
 */
const loadImage = (
  url: string
): Promise<[HTMLImageElement | undefined, Error | undefined]> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = url
    img.crossOrigin = 'anonymous'

    img.onload = () => resolve([img, undefined])
    img.onerror = () =>
      resolve([undefined, new Error(`[loadImage][图片加载失败]: ${url}`)])
  })
}

export default loadImage
