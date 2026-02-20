import {
  DEFAULT_JANK_THRESHOLD,
  type JankCallback,
  type OnJankOptions,
  type StopListening,
} from './interface'

/**
 * 卡顿监控器
 *
 * 通过 requestAnimationFrame 循环检测帧间隔，
 * 当帧间隔超过阈值时认为发生卡顿并触发回调。
 */
export default class JankMonitor {
  private readonly threshold: number
  private rafId: number | null = null

  /**
   * 创建 JankMonitor 实例
   * @param options - 配置选项
   */
  constructor(options?: OnJankOptions) {
    this.threshold = options?.threshold ?? DEFAULT_JANK_THRESHOLD
  }

  /**
   * 开始监控卡顿
   * @param callback - 卡顿回调函数，接收卡顿信息
   * @returns 停止监听函数
   */
  observe = (callback: JankCallback): StopListening => {
    let lastFrameTime = performance.now()

    const checkJank = () => {
      const currentTime = performance.now()
      const frameDuration = currentTime - lastFrameTime

      if (frameDuration > this.threshold) {
        callback({
          duration: frameDuration,
          timestamp: currentTime,
        })
      }

      lastFrameTime = currentTime
      this.rafId = requestAnimationFrame(checkJank)
    }

    this.rafId = requestAnimationFrame(checkJank)

    return () => this.stop()
  }

  /** 停止监听 */
  stop = (): void => {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
  }
}
