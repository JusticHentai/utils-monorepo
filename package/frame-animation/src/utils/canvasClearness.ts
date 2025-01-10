export interface Options {
  width: number // element 宽度
  height: number // element 高度
  canvas: HTMLCanvasElement // canvas 本体
}

/**
 * canvas 清晰度修复
 * @param options Options
 */
export default function canvasClearness(options: Options) {
  const { height, width, canvas } = options

  canvas.style.height = `${height}px`
  canvas.style.width = `${width}px`

  const PixelRatio = window.devicePixelRatio || 1
  canvas.height = height * PixelRatio
  canvas.width = width * PixelRatio

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.scale(PixelRatio, PixelRatio)
}
