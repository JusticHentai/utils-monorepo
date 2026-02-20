import deepMerge from '@justichentai/js-utils/deepMerge'

import type {
  NavigationMetrics,
  PageInfo,
  SurveillanceConfig,
} from './interface'

import BehaviorMonitor from '../BehaviorMonitor'
import ErrorMonitor from '../ErrorMonitor'
import type { ErrorInfo } from '../ErrorMonitor/interface'
import { FpsMonitor } from '../FpsMonitor'
import getNavigationMetrics from '../getNavigationMetrics'
import getPageInfo from '../getPageInfo'
import getPaintMetrics from '../getPaintMetrics'
import type { PaintMetrics } from '../getPaintMetrics/interface'
import JankMonitor from '../JankMonitor'
import LongTaskMonitor, { type LongTaskMetrics } from '../LongTaskMonitor'
import onWindowLoaded from '../onWindowLoaded'
import PageLifecycleMonitor from '../PageLifecycleMonitor'
import Reporter from '../Reporter'
import {
  PERFORMANCE_TYPE,
  REPORT_METHOD,
  REPORT_TYPE,
} from '../Reporter/interface'
import RequestMonitor from '../RequestMonitor'
import type { RequestErrorInfo } from '../RequestMonitor/interface'
import ResourceMonitor from '../ResourceMonitor'
import shouldSample from '../shouldSample'
import WebVitalsMonitor from '../WebVitalsMonitor'
import { DEFAULT_CONFIG } from './interface'

/**
 * Surveillance 前端监控类
 *
 * 一键初始化所有前端监控能力，包括性能、错误、请求、行为和生命周期监控。
 */
export class Surveillance {
  config: SurveillanceConfig
  reporter: Reporter
  running = false
  private readonly stoppers: Array<() => void> = []
  readonly longTaskMonitor: LongTaskMonitor
  readonly resourceMonitor: ResourceMonitor
  readonly behaviorMonitor: BehaviorMonitor
  readonly requestMonitor: RequestMonitor
  readonly errorMonitor: ErrorMonitor
  readonly pageLifecycleMonitor: PageLifecycleMonitor
  readonly jankMonitor: JankMonitor
  readonly webVitalsMonitor: WebVitalsMonitor
  readonly fpsMonitor: FpsMonitor

  /**
   * 创建 Surveillance 实例
   * @param userConfig - 用户自定义配置，会与 DEFAULT_CONFIG 深度合并
   */
  constructor(userConfig?: Partial<SurveillanceConfig>) {
    this.config = deepMerge({ ...DEFAULT_CONFIG }, userConfig ?? {})
    this.reporter = this.createReporter()

    this.errorMonitor = new ErrorMonitor({
      jsError: this.config.error?.jsError,
      resourceError: this.config.error?.resourceError,
      promiseError: this.config.error?.promiseError,
      errorFilter: this.config.error?.errorFilter as
        | ((error: ErrorInfo) => boolean)
        | undefined,
    })

    this.pageLifecycleMonitor = new PageLifecycleMonitor()

    this.jankMonitor = new JankMonitor({
      threshold: this.config.performance?.jankThreshold,
    })

    this.webVitalsMonitor = new WebVitalsMonitor({
      reportAllChanges: false,
    })

    this.fpsMonitor = new FpsMonitor()

    this.longTaskMonitor = new LongTaskMonitor()

    this.resourceMonitor = new ResourceMonitor({
      filter: this.config.performance?.resourceFilter,
    })

    this.behaviorMonitor = new BehaviorMonitor({
      click: this.config.behavior?.click,
      scroll: this.config.behavior?.scroll,
      input: this.config.behavior?.input,
      routeChange: this.config.behavior?.routeChange,
      maxBehaviors: this.config.behavior?.maxBehaviors,
    })

    this.requestMonitor = new RequestMonitor({
      onRequest: (request) => {
        this.reporter.report(REPORT_TYPE.REQUEST, request)
      },
      onError: this.config.error?.requestError
        ? this.requestErrorCallback
        : undefined,
      ignoreUrls: this.config.request?.ignoreUrls,
      timeoutThreshold: this.config.request?.timeoutThreshold,
    })
  }

  /** 启动监控 */
  start = (): void => {
    if (this.running) return
    if (!this.config.enabled) return
    if (!this.shouldSample()) return

    this.running = true

    const { performance, error, request, behavior, lifecycle } = this.config

    // 性能监控
    if (performance?.enabled) {
      if (performance.webVitals) this.startWebVitalsMonitor()
      if (performance.resource) this.startResourceMonitor()
      if (performance.longTask) this.startLongTaskMonitor()
      if (performance.fps) this.startFpsMonitor()
      if (performance.jank) this.startJankMonitor()
      if (performance.navigation !== false) this.startNavigationReport()
    }

    // 错误监控
    if (error?.enabled) this.startErrorMonitor()

    // 请求监控
    if (request?.enabled) {
      if (request.xhr) this.startXHRMonitor()
      if (request.fetch) this.startFetchMonitor()
    }

    // 行为监控
    if (behavior?.enabled) this.startBehaviorMonitor()

    // 生命周期监控
    if (lifecycle?.enabled) this.startLifecycleMonitor()
  }

  /** 停止监控 */
  stop = (): void => {
    if (!this.running) return

    this.running = false
    this.stoppers.forEach((fn) => fn())
    this.stoppers.length = 0
    this.requestMonitor.stop()
  }

  /** 更新配置 */
  updateConfig = (newConfig: Partial<SurveillanceConfig>): void => {
    this.config = deepMerge(this.config, newConfig)
    this.reporter = this.createReporter()
  }

  /** 获取导航性能指标 */
  getNavigationMetrics = (): NavigationMetrics | undefined => {
    return getNavigationMetrics()
  }

  /** 获取当前页面信息 */
  getPageInfo = (): PageInfo => {
    return getPageInfo()
  }

  /** 获取绘制性能指标 */
  getPaintMetrics = (): PaintMetrics | undefined => {
    return getPaintMetrics()
  }

  // ==================== 私有方法 ====================

  /** 根据当前配置创建 Reporter 实例 */
  private createReporter = (): Reporter => {
    return new Reporter({
      reportUrl: this.config.reportUrl ?? '',
      reportMethod: this.config.reportMethod as REPORT_METHOD | undefined,
      batchSize: this.config.batchSize,
      reportInterval: this.config.reportInterval,
      appId: this.config.appId,
      beforeReport: this.config.hooks?.beforeReport,
      afterReport: this.config.hooks?.afterReport,
    })
  }

  /** 统一错误回调，上报错误并触发 onError 钩子 */
  private readonly errorCallback = (error: ErrorInfo): void => {
    this.reporter.report(REPORT_TYPE.ERROR, error)
    this.config.hooks?.onError?.(
      error as unknown as import('./interface').ErrorInfo
    )
  }

  /** 请求错误回调，将 RequestErrorInfo 转为通用错误上报 */
  private readonly requestErrorCallback = (error: RequestErrorInfo): void => {
    this.reporter.report(REPORT_TYPE.ERROR, error)
  }

  /** 根据采样率判断是否需要采集 */
  private shouldSample = (): boolean => {
    return shouldSample(this.config.sampleRate)
  }

  /** 启动 Web Vitals 监控 (LCP, FID, CLS, FCP, INP, TTFB, FP) */
  private startWebVitalsMonitor = (): void => {
    const stop = this.webVitalsMonitor.observe((metric) => {
      this.reportPerformance(PERFORMANCE_TYPE.WEB_VITALS, metric)
      this.config.hooks?.onMetric?.(metric)
    })

    this.stoppers.push(stop)
  }

  /** 启动资源加载监控 */
  private startResourceMonitor = (): void => {
    const stop = this.resourceMonitor.observe((resources) => {
      this.reportPerformance(PERFORMANCE_TYPE.RESOURCE, resources)
    })

    this.stoppers.push(stop)
  }

  /** 启动长任务监控 */
  private startLongTaskMonitor = (): void => {
    const stop = this.longTaskMonitor.observe(
      (task: LongTaskMetrics) =>
        this.reportPerformance(PERFORMANCE_TYPE.LONG_TASK, task),
      { threshold: this.config.performance!.longTaskThreshold }
    )

    this.stoppers.push(stop)
  }

  /** 启动 FPS 监控 */
  private startFpsMonitor = (): void => {
    const stop = this.fpsMonitor.observe((fps) => {
      this.reportPerformance(PERFORMANCE_TYPE.FPS, fps)
    })

    this.stoppers.push(stop)
  }

  /** 启动卡顿监控 */
  private startJankMonitor = (): void => {
    const stop = this.jankMonitor.observe((jankInfo) =>
      this.reportPerformance(PERFORMANCE_TYPE.JANK, jankInfo)
    )

    this.stoppers.push(stop)
  }

  /** 上报导航性能指标 */
  private startNavigationReport = (): void => {
    const stop = onWindowLoaded(() => {
      const navMetrics = getNavigationMetrics()
      this.reportPerformance(PERFORMANCE_TYPE.NAVIGATION, navMetrics)
    })

    this.stoppers.push(stop)
  }

  /** 启动错误监控 */
  private startErrorMonitor = (): void => {
    const stop = this.errorMonitor.observe(this.errorCallback)

    this.stoppers.push(stop)
  }

  /** 启动 XHR 请求监控 */
  private startXHRMonitor = (): void => {
    this.requestMonitor.observeXHR()
  }

  /** 启动 Fetch 请求监控 */
  private startFetchMonitor = (): void => {
    this.requestMonitor.observeFetch()
  }

  /** 启动行为监控 */
  private startBehaviorMonitor = (): void => {
    const stop = this.behaviorMonitor.observe((behavior) => {
      this.reporter.report(REPORT_TYPE.BEHAVIOR, [behavior])
    })

    this.stoppers.push(stop)
  }

  /** 启动页面生命周期监控 */
  private startLifecycleMonitor = (): void => {
    const stop = this.pageLifecycleMonitor.observe()

    this.stoppers.push(stop)
  }

  /** 上报性能指标的快捷方法 */
  private reportPerformance = (
    metricType: PERFORMANCE_TYPE,
    metrics: unknown
  ): void => {
    this.reporter.report(REPORT_TYPE.PERFORMANCE, { metricType, metrics })
  }
}

// 默认导出
export default Surveillance
