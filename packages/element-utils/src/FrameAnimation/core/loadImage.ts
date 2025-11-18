const loadImage = (url: string): Promise<HTMLImageElement | undefined> => {
  return new Promise((resolve) => {
    const img = new Image()

    // 跨域
    img.crossOrigin = 'anonymous'

    // 设置图片 src
    img.src = url

    // 图片加载完成
    img.onload = () => resolve(img)

    // 图片加载失败
    img.onerror = () => resolve(undefined)
  })
}

export default loadImage
