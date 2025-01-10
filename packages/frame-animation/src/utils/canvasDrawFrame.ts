import getPosition from './getPosition'

export interface Options {
  currentFrame: number // 当前帧数
  frame: number // 总帧数
  width: number // element 宽度
  height: number // element 高度
  canvas: HTMLCanvasElement // canvas 本体
  image: HTMLImageElement // image 本体
  column: number // 一行 有少多列
}

/**
 * 帧动画模式 绘画当前画面
 * @param options
 */
export default function canvasDraw(options: Options) {
  const { width, height, canvas, image, currentFrame, frame, column } = options

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  ctx.clearRect(0, 0, width, height)

  // 获取位置
  const { top, left } = getPosition({
    currentFrame,
    width,
    height,
    column,
  })

  if (column !== 0) {
    // 绘画
    ctx.drawImage(
      image,
      -left,
      -top,
      width * column,
      height * Math.ceil(frame / column)
    )
  } else {
    ctx.drawImage(image, -left, -top, width * frame, height)
  }
}
