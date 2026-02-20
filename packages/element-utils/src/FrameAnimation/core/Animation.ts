import { AnimationOptions } from '../interface'
import calcCurrentFrame from './calcCurrentFrame'
import paintFrame from './paintFrame'

/**
 * 播放实例序列帧
 */
class Animation {
  options: AnimationOptions

  /**
   * 每次 start 时记录的初始时间戳 单位 ms
   */
  initialTime = 0
  /**
   * 每次 start 时记录的初始帧数
   */
  initialFrame = 0
  /**
   * 当前帧数，用于避免重复渲染，从 0 开始
   */
  currentFrame = -1
  /**
   * 当前播完次数，从 0 开始
   */
  currentTimes = 0
  /**
   * 渲染 ID 用于取消系统下一次 raf 回调
   */
  rafId?: number
  /**
   * 总播放次数，-1 代表循环
   */
  totalTimes = -1

  constructor(options: AnimationOptions) {
    this.options = options
  }

  /**
   * 开始播放, 每次开始都会清空状态
   * 暂停后继续需要用 resume
   * @param times 播放次数，没传就是循环
   */
  start = (times?: number) => {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }

    this.initialTime = Date.now()
    this.initialFrame = 0
    this.currentFrame = -1
    this.currentTimes = 0
    this.totalTimes = times ?? -1
    this.rafId = requestAnimationFrame(this.render)
  }

  /**
   * 继续播放
   * 初始时间要更新，初始帧设为当前帧
   */
  resume = () => {
    // 避免重复调用产生多个 raf 循环
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }

    this.initialTime = Date.now()
    // 从当前帧继续，而不是从 initialFrame 重新计算
    this.initialFrame = this.currentFrame
    this.rafId = requestAnimationFrame(this.render)
  }

  /**
   * 停止播放
   */
  pause = () => {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
      this.rafId = undefined
    }
  }

  /**
   * 渲染每一帧
   */
  render = () => {
    const { frameCount, duration, canvasEl, frameList, width, height } =
      this.options
    const { currentFrame, initialFrame, initialTime, totalTimes } = this

    // 获取下一次要渲染的帧数, 和当前播完次数
    const { nextFrame, completedTimes } = calcCurrentFrame({
      initialFrame,
      initialTime,
      duration,
      frameCount,
    })

    // 避免渲染不存在帧
    if (!frameList[nextFrame]) {
      this.rafId = requestAnimationFrame(this.render)
      return
    }

    // 避免重复渲染
    if (nextFrame === currentFrame) {
      this.rafId = requestAnimationFrame(this.render)
      return
    }

    // 判断播完一次
    if (completedTimes !== this.currentTimes) {
      this.options.onCompleteOnce?.(this.currentTimes)
    }

    // 判断结束, totalTimes > 0 表示非循环，completedTimes >= totalTimes 表示播放次数用完
    if (totalTimes > 0 && completedTimes >= totalTimes) {
      this.options.onComplete?.()
      this.pause()

      return
    }

    // 绘制当前帧
    paintFrame({
      canvas: canvasEl,
      frameBitmap: frameList[nextFrame],
      width,
      height,
    })

    // 绘制结束处理状态
    this.currentFrame = nextFrame
    this.currentTimes = completedTimes
    this.options.onFrame?.(nextFrame)
    this.rafId = requestAnimationFrame(this.render)
  }
}

export default Animation
