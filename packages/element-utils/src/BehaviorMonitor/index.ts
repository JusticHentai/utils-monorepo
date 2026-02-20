import observeClick from './core/observeClick'
import observeInput from './core/observeInput'
import observeRouteChange from './core/observeRouteChange'
import observeScroll from './core/observeScroll'
import observeVisibility from './core/observeVisibility'
import type {
  BehaviorCallback,
  BehaviorInfo,
  BehaviorMonitorOptions,
  StopListening,
} from './interface'
import { BEHAVIOR_TYPE, DEFAULT_MAX_BEHAVIORS } from './interface'

/**
 * 用户行为监控器
 *
 * 功能特性：
 * - 点击行为监控
 * - 滚动行为监控
 * - 输入行为监控
 * - 路由变化监控
 * - 页面可见性监控
 * - 行为面包屑追踪
 * - 自定义行为记录
 */
export default class BehaviorMonitor {
  /** 监控配置 */
  private options: BehaviorMonitorOptions
  /** 停止监听函数列表 */
  private stoppers: StopListening[] = []
  /** 行为记录列表 */
  private behaviors: BehaviorInfo[] = []
  /** 是否正在运行 */
  private running = false

  constructor(options: BehaviorMonitorOptions = {}) {
    this.options = options
  }

  /**
   * 启动所有行为监控
   * @param callback - 行为事件回调函数
   * @returns 停止监听函数
   */
  observe = (callback: BehaviorCallback): StopListening => {
    if (this.running) return () => {}

    this.running = true

    const wrappedCallback: BehaviorCallback = (behavior) => {
      this.addBehavior(behavior)
      callback(behavior)
    }

    // 点击
    if (this.options.click !== false) {
      this.stoppers.push(
        observeClick(wrappedCallback, this.options.clickOptions)
      )
    }

    // 滚动
    if (this.options.scroll !== false) {
      this.stoppers.push(
        observeScroll(wrappedCallback, this.options.scrollOptions)
      )
    }

    // 输入
    if (this.options.input !== false) {
      this.stoppers.push(
        observeInput(wrappedCallback, this.options.inputOptions)
      )
    }

    // 路由变化
    if (this.options.routeChange !== false) {
      this.stoppers.push(observeRouteChange(wrappedCallback))
    }

    // 页面可见性
    this.stoppers.push(observeVisibility(wrappedCallback))

    return () => this.stop()
  }

  /**
   * 停止所有行为监控
   */
  stop = () => {
    this.stoppers.forEach((stop) => stop())
    this.stoppers = []
    this.running = false
  }

  /**
   * 添加行为记录
   * @param behavior - 行为信息
   */
  private addBehavior = (behavior: BehaviorInfo) => {
    const maxBehaviors = this.options.maxBehaviors ?? DEFAULT_MAX_BEHAVIORS
    this.behaviors.push(behavior)

    if (this.behaviors.length > maxBehaviors) {
      this.behaviors = this.behaviors.slice(-maxBehaviors)
    }
  }

  /**
   * 获取所有行为记录
   * @returns 行为记录副本
   */
  getBehaviors = (): BehaviorInfo[] => [...this.behaviors]

  /**
   * 清空行为记录
   */
  clear = () => {
    this.behaviors = []
  }

  /**
   * 记录自定义行为
   * @param name - 行为名称
   * @param data - 附加数据
   * @returns 行为信息对象
   */
  trackCustom = (
    name: string,
    data?: Record<string, unknown>
  ): BehaviorInfo => {
    const behavior: BehaviorInfo = {
      type: BEHAVIOR_TYPE.CUSTOM,
      timestamp: Date.now(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      data: {
        name,
        ...data,
      },
    }

    this.addBehavior(behavior)
    return behavior
  }

  /**
   * 是否正在运行
   */
  isRunning = (): boolean => this.running
}
