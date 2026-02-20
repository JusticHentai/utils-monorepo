import Animation from './core/Animation'
import calcFrameState from './core/calcFrameState'
import canvasClearness from './core/canvasClearness'
import createFrameBitmap from './core/createFrameCanvas'
import loadImage from './core/loadImage'
import { Options } from './interface'

class FrameAnimation {
  options: Options
  imageElement: HTMLImageElement | undefined
  frameState: {
    width: number
    height: number
  } = {
    width: 0,
    height: 0,
  }
  frameList: Array<{
    bitmap: ImageBitmap
    left: number
    top: number
  }> = []

  constructor(options: Options) {
    this.options = options
  }

  /**
   * 离屏渲染
   * 下载图片并创建好可反复引用的帧，节省内存 提高性能
   * 也可提前将图片上传到 GPU，避免游玩时再提交会卡一下
   * 提前计算所有位置并存内存，防止反复计算
   */
  preRender = async () => {
    // 下载图片 -------------------------------------------------------------
    const imageElement = await this.loadImage()

    if (!imageElement) {
      return
    }

    // 计算帧状态 -------------------------------------------------------------
    const { frameCount, rowCount } = this.options

    const { width, height, frameList } = calcFrameState({
      imageElement,
      frameCount,
      rowCount,
    })

    this.frameState = {
      width,
      height,
    }

    // 创建 ImageBitmap -------------------------------------------------------------
    const bitmapList = await Promise.all(
      frameList.map((frame) =>
        createFrameBitmap({
          width,
          height,
          left: frame.left,
          top: frame.top,
          imageEl: imageElement,
        })
      )
    )

    this.frameList = frameList.map((frame, index) => ({
      bitmap: bitmapList[index],
      ...frame,
    }))
  }

  /**
   * 创建实例挂到对应 el 上，自动填充大小
   * el 需定义自己的大小
   */
  createInstance = (el: HTMLDivElement) => {
    const { width, height } = el.getBoundingClientRect()

    const canvas = document.createElement('canvas')

    // 适配 ratio
    canvasClearness({
      width,
      height,
      canvas,
    })

    el.appendChild(canvas)

    const frameList = this.frameList.map((frame) => frame.bitmap)

    // 创建动画实例
    return new Animation({
      ...this.options,
      canvasEl: canvas,
      width,
      height,
      frameList,
    })
  }

  /**
   * 加载图片
   * 单独拆出来，方便预加载调用
   */
  loadImage = async () => {
    this.imageElement = await loadImage(this.options.imageUrl)

    return this.imageElement
  }
}

export default FrameAnimation

export { default as FrameAnimationInstance } from './core/Animation'
