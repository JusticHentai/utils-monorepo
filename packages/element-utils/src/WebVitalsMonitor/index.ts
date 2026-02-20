import onCLS from '../onCLS'
import onFCP from '../onFCP'
import onFID from '../onFID'
import onFP from '../onFP'
import onINP from '../onINP'
import onLCP from '../onLCP'
import onTTFB from '../onTTFB'
import { supportEntryType } from '../supportPerformanceObserver'
import {
  ENTRY_TYPE,
  type ObserveWebVitalsOptions,
  type StopListening,
  type WebVitalsCallback,
} from './interface'

/**
 * Web Vitals 监控器
 *
 * 监控所有 Web Vitals 指标（LCP, FID, CLS, FCP, FP, INP, TTFB）。
 */
export default class WebVitalsMonitor {
  private readonly options: ObserveWebVitalsOptions
  private stoppers: StopListening[] = []

  /**
   * 创建 WebVitalsMonitor 实例
   * @param options - 配置选项
   */
  constructor(options?: ObserveWebVitalsOptions) {
    this.options = options || {}
  }

  /**
   * 开始监控 Web Vitals
   * @param callback - 指标回调函数，接收完整的 WebVitalsMetric 对象
   * @returns 停止监听函数
   */
  observe = (callback: WebVitalsCallback): StopListening => {
    // LCP
    if (supportEntryType(ENTRY_TYPE.LARGEST_CONTENTFUL_PAINT)) {
      this.stoppers.push(
        onLCP(callback, { reportAllChanges: this.options.reportAllChanges })
      )
    }

    // FID (保留以兼容，已被 INP 取代)
    if (supportEntryType(ENTRY_TYPE.FIRST_INPUT)) {
      this.stoppers.push(onFID(callback))
    }

    // CLS
    if (supportEntryType(ENTRY_TYPE.LAYOUT_SHIFT)) {
      this.stoppers.push(
        onCLS(callback, { reportAllChanges: this.options.reportAllChanges })
      )
    }

    // FCP & FP
    if (supportEntryType(ENTRY_TYPE.PAINT)) {
      this.stoppers.push(onFCP(callback))
      this.stoppers.push(onFP(callback))
    }

    // INP
    if (supportEntryType(ENTRY_TYPE.EVENT)) {
      this.stoppers.push(
        onINP(callback, {
          reportAllChanges: this.options.reportAllChanges,
          durationThreshold: this.options.durationThreshold,
        })
      )
    }

    // TTFB
    this.stoppers.push(onTTFB(callback))

    return () => this.stop()
  }

  /** 停止监听 */
  stop = (): void => {
    this.stoppers.forEach((stop) => stop())
    this.stoppers = []
  }
}
