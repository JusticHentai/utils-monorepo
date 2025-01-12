import addImage, { AddImageOptions } from './core/addImage'
import addText, { AddTextOptions } from './core/addText'
import initCanvas, { InitCanvasOptions } from './core/initCanvas'

export default class Canvas {
  canvasElement!: HTMLCanvasElement

  constructor(options: InitCanvasOptions) {
    this.canvasElement = initCanvas(options)
  }

  addImage = (options: Omit<AddImageOptions, 'ctx'>) => {
    return addImage({
      ...options,
      ctx: this.canvasElement.getContext('2d')!,
    })
  }

  addText = (options: Omit<AddTextOptions, 'ctx'>) => {
    return addText({
      ...options,
      ctx: this.canvasElement.getContext('2d')!,
    })
  }

  createBase64 = () => this.canvasElement.toDataURL('image/png')
}
