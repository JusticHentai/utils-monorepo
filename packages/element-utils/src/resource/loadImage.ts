/**
 * 加载图片
 */
const loadImage = (
  url: string
): Promise<[HTMLImageElement, undefined] | [undefined, Error]> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = url
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      resolve([img, undefined])
    }
    img.onerror = () => {
      resolve([undefined, new Error(`[loadImage][图片加载失败]: ${url}`)])
    }
  })
}

export default loadImage
