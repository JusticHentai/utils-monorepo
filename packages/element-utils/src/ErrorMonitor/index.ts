import observeConsoleError from './core/observeConsoleError'
import observeJSError from './core/observeJSError'
import observePromiseError from './core/observePromiseError'
import observeResourceError from './core/observeResourceError'
import type {
  ErrorCallback,
  ErrorInfo,
  ErrorMonitorOptions,
  StopListening,
} from './interface'

/**
 * 错误监控器
 *
 * 统一监控 JS 错误、资源加载错误、Promise 未处理拒绝错误和 console.error 调用。
 */
export default class ErrorMonitor {
  private readonly options: ErrorMonitorOptions
  private stoppers: StopListening[] = []

  /**
   * 创建 ErrorMonitor 实例
   * @param options - 错误监控配置
   */
  constructor(options?: ErrorMonitorOptions) {
    this.options = options || {}
  }

  /**
   * 开始监控所有错误
   * @param callback - 错误回调函数
   * @returns 停止监听函数
   */
  observe = (callback: ErrorCallback): StopListening => {
    const {
      jsError = true,
      resourceError = true,
      promiseError = true,
      consoleError = false,
      errorFilter,
    } = this.options

    const wrappedCallback = (error: ErrorInfo) => {
      if (errorFilter && !errorFilter(error)) return

      callback(error)
    }

    if (jsError) {
      this.stoppers.push(observeJSError(wrappedCallback))
    }

    if (resourceError) {
      this.stoppers.push(observeResourceError(wrappedCallback))
    }

    if (promiseError) {
      this.stoppers.push(observePromiseError(wrappedCallback))
    }

    if (consoleError) {
      this.stoppers.push(observeConsoleError(wrappedCallback))
    }

    return () => this.stop()
  }

  /** 停止监听 */
  stop = (): void => {
    this.stoppers.forEach((stop) => stop())
    this.stoppers = []
  }
}
