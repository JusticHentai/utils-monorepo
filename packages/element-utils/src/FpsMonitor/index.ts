/**
 * 单次测量 FPS
 * 通过 requestAnimationFrame 回调的高精度时间戳计算
 */
const getFps = (): Promise<number> => {
  return new Promise((resolve) => {
    let frameCount = 0
    let startTime: number

    const tick = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp
      }

      frameCount++

      if (timestamp - startTime < 1000) {
        requestAnimationFrame(tick)
      } else {
        // 精确计算：帧数 / 实际经过秒数
        resolve(Math.round((frameCount * 1000) / (timestamp - startTime)))
      }
    }

    requestAnimationFrame(tick)
  })
}

/** 停止监听函数类型 */
type StopListening = () => void

/** FPS 更新回调 */
type FpsCallback = (fps: number) => void

/**
 * FPS 监控器
 *
 * 持续监控帧率变化。
 */
export class FpsMonitor {
  private animationId: number | null = null

  /**
   * 开始监控 FPS
   * @param onUpdate - FPS 更新时的回调函数
   * @returns 停止监控的函数
   */
  observe = (onUpdate: FpsCallback): StopListening => {
    let frameCount = 0
    let lastTime = performance.now()

    const tick = () => {
      frameCount++
      const now = performance.now()

      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime))
        onUpdate(fps)
        frameCount = 0
        lastTime = now
      }

      this.animationId = requestAnimationFrame(tick)
    }

    this.animationId = requestAnimationFrame(tick)

    return () => this.stop()
  }

  /** 停止监控 */
  stop = (): void => {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId)
      this.animationId = null
    }
  }
}

/** @deprecated 使用 new FpsMonitor() 替代 */
export const createFpsMonitor = (onUpdate: FpsCallback) => {
  const monitor = new FpsMonitor()
  return monitor.observe(onUpdate)
}

export default getFps
