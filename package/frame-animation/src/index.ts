import { DefaultOptions, InnerOptions, Options } from './types'
import canvasClearness from './utils/canvasClearness'
import canvasDraw from './utils/canvasDrawFrame'
import frameTransform from './utils/frameTransform'
import getCurrentFrame from './utils/getCurrentFrame'
import getCurrentTimes from './utils/getCurrentTimes'
import getDomSize from './utils/getDomSize'
import imageLoad from './utils/imageLoad'

const defaults: DefaultOptions = {
  duration: 1000,
  column: 0,
}

/**
 * 外部使用对象
 */
export default class FrameAnimation {
  public options: InnerOptions

  constructor(options: Options) {
    this.options = { ...defaults, ...options }
  }

  async init() {
    // 初始化图片
    await this.imageInit()

    // 初始化 canvas 对象
    this.canvasInit()

    // 获取当前 dom 大小
    const { width, height } = getDomSize(this.options.el)

    // 初始化 canvas 清晰度
    canvasClearness({
      width,
      height,
      canvas: this.canvas,
    })

    const { frame, column } = this.options

    // 画第一帧
    canvasDraw({
      currentFrame: 1,
      frame,
      column,
      width,
      height,
      canvas: this.canvas,
      image: this.image,
    })
  }

  // image 实例
  image!: HTMLImageElement

  /**
   * 初始化图片
   */
  async imageInit() {
    this.image = await imageLoad(this.options.url) // 加载图片

    this.options['imageLoadComplete'] &&
      this.options['imageLoadComplete'](this.image) // 回调
  }

  // canvas 实例
  canvas!: HTMLCanvasElement

  /**
   * 初始化 canvas
   */
  canvasInit() {
    this.canvas = document.createElement('canvas')

    this.options.el.appendChild(this.canvas)
  }

  animeState = false // 帧动画状态 true 运行中 false 没有运行
  playState = true // 帧动画播放状态 true 正放 false 倒放
  renderFrameID!: number // 记录渲染 ID

  times = 0 // 用于限定播放次数 0表示无限次
  lastTimes = 0 // 用于记录上一次的次数
  lastFrame = 0 // 用于记录渲染期间的上一帧
  initialFrame!: number // 用于记录每次动作的开始帧数
  initialTime!: number // 用于记录每次动作的开始时间

  /**
   * 开始渲染动画
   */
  animeStart() {
    this.animeState = true // 启动动画
    this.initialFrame = this.lastFrame // 记录开始动画的初始帧数
    this.initialTime = Date.now() // 记录开始动画的初始时间

    this.renderFrameID = requestAnimationFrame(this.renderFrame) // 记录当前动作的id 并开启动作
  }

  /**
   * 渲染每一帧
   */
  renderFrame = () => {
    const { frame, duration, el, column } = this.options

    // 获取当前要渲染的帧数
    let currentFrame = getCurrentFrame({
      initialFrame: this.initialFrame,
      initialTime: this.initialTime,
      duration,
      frame,
    })

    // 获取当前动画的次数
    const currentTimes = getCurrentTimes({
      initialFrame: this.initialFrame,
      initialTime: this.initialTime,
      duration,
      frame,
    })

    // 每播完一次回调
    if (currentTimes < this.lastTimes) {
      this.options.completeOne && this.options.completeOne(currentTimes)
      this.lastTimes = currentTimes
    }

    // 暂停 或者 次数耗尽退出
    if (!this.animeState || (this.times !== 0 && currentTimes >= this.times)) {
      this.animeState = false
      cancelAnimationFrame(this.renderFrameID)

      if (this.times !== 0 && currentTimes >= this.times) {
        this.times = 0
        this.options.complete && this.options.complete()
      }

      return
    }

    // 根据播放模式获取帧数
    currentFrame = frameTransform({
      playState: this.playState,
      currentFrame,
      frame,
    })

    // 已经渲染过就不反复渲染了
    if (currentFrame === this.lastFrame) {
      // 继续渲染下一帧
      this.renderFrameID = requestAnimationFrame(this.renderFrame)

      return
    }

    // 获取当前尺寸
    const { width, height } = getDomSize(el)

    // 渲染
    canvasDraw({
      currentFrame,
      frame,
      column,
      width,
      height,
      canvas: this.canvas,
      image: this.image,
    })

    // 储存最后一帧
    this.lastFrame = currentFrame

    // 继续渲染下一帧
    this.renderFrameID = requestAnimationFrame(this.renderFrame)

    // 每帧回调
    this.options.frameComplete && this.options.frameComplete(currentFrame)
  }

  /**
   * 动画暂停
   */
  animePause() {
    this.animeState = false // 暂停动画
  }

  /**
   * 启动动画
   */
  play(): FrameAnimation {
    this.animeStart()

    return this
  }

  /**
   * 暂停动画
   */
  pause(): FrameAnimation {
    this.animePause()

    return this
  }

  /**
   * 播放特定次数
   * @param n
   */
  playTimes(n: number): FrameAnimation {
    // 播放到一半时调用播放多次 前面次数不算 多加一次
    if (this.playState) {
      this.times = this.lastFrame === 0 ? n : n + 1 // 初始化要画第一帧
    } else {
      this.times = this.lastFrame === 1 ? n : n + 1 // 倒放已经画好第一帧
    }

    this.animeStart()

    return this
  }

  /**
   * 重新播放
   */
  restart(): FrameAnimation {
    this.animePause()

    this.lastFrame = 0

    this.playState = true
    this.animeStart()

    return this
  }

  /**
   * 倒放
   */
  reverse(): FrameAnimation {
    const { frame } = this.options

    this.animePause()

    this.lastFrame = frame - this.lastFrame + 1
    this.playState = false

    this.animeStart()

    return this
  }

  /**
   * 尺寸变动时更新
   */
  update(): FrameAnimation {
    // 获取当前 dom 大小
    const { width, height } = getDomSize(this.options.el)

    // 初始化 canvas 清晰度
    canvasClearness({
      width,
      height,
      canvas: this.canvas,
    })

    return this
  }
}
