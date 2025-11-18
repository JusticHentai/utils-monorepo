export interface Options {
  width: number
  height: number
  left: number
  top: number
  imageEl: HTMLImageElement
}

/**
 * 创建帧 Canvas
 * 拿到对应帧的位置，截取图片这部分帧绘制到 canvas 上
 */
const createFrameCanvas = (options: Options) => {
  const { width, height, left, top, imageEl } = options

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.drawImage(imageEl, left, top, width, height, 0, 0, width, height)

  return canvas
}

export default createFrameCanvas
