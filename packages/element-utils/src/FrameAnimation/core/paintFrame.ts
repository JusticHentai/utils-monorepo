export interface Options {
  canvas: HTMLCanvasElement
  frameCanvas: HTMLCanvasElement
  width: number
  height: number
}

/**
 * 绘画当前帧
 * 帧直接填满实例 canvas
 */
const paintFrame = (options: Options) => {
  const { canvas, frameCanvas, width, height } = options
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  // 清除画布
  ctx.clearRect(0, 0, width, height)

  // 绘制帧
  ctx.drawImage(frameCanvas, 0, 0, width, height)
}

export default paintFrame
