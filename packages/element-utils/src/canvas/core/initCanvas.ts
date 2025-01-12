export interface InitCanvasOptions {
  el?: HTMLElement
  width: number
  height: number
}

const initCanvas = (options: InitCanvasOptions) => {
  const { el, width, height } = options

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  el?.appendChild(canvas)

  return canvas
}

export default initCanvas
