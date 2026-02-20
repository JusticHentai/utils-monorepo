export interface Options {
  width: number
  height: number
  left: number
  top: number
  imageEl: HTMLImageElement
}

/**
 * 创建帧 ImageBitmap
 * 使用 createImageBitmap 直接裁剪，比 canvas drawImage 性能更好
 */
const createFrameBitmap = async (options: Options): Promise<ImageBitmap> => {
  const { width, height, left, top, imageEl } = options

  return createImageBitmap(imageEl, left, top, width, height)
}

export default createFrameBitmap
