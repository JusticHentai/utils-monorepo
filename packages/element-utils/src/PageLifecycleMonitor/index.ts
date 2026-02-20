/**
 * 页面生命周期事件监控
 * 统一监听浏览器页面生命周期事件，包括：
 * - 文档就绪：DOMContentLoaded、load
 * - 页面卸载：beforeunload、unload
 * - 页面展示/隐藏：pageshow、pagehide、visibilitychange
 * - 窗口焦点：focus、blur
 * - 网络状态：online、offline（复用 onNetworkChange）
 * - 路由变化：popstate、hashchange
 * - 页面冻结：freeze、resume（Page Lifecycle API）
 * - SSR 环境检测
 */

import isBrowser from '../isBrowser'
import onDOMContentLoaded from '../onDOMContentLoaded'
import onHashChange from '../onHashChange'
import onNetworkChange from '../onNetworkChange'
import onPageFreeze from '../onPageFreeze'
import onPageHide from '../onPageHide'
import onPageResume from '../onPageResume'
import onPageShow from '../onPageShow'
import onPageUnload from '../onPageUnload'
import onPopState from '../onPopState'
import onUnload from '../onUnload'
import onWindowBlur from '../onWindowBlur'
import onWindowFocus from '../onWindowFocus'
import onWindowLoaded from '../onWindowLoaded'
import visibility from '../visibility'

import {
  DEFAULT_HANDLERS,
  PAGE_LIFECYCLE_EVENT,
  type PageLifecycleHandlers,
} from './interface'

/**
 * 页面生命周期监控器
 *
 * 统一监听浏览器页面生命周期事件。
 */
export default class PageLifecycleMonitor {
  private readonly handlers: PageLifecycleHandlers
  private cleanupFns: Array<() => void> = []

  /**
   * 创建 PageLifecycleMonitor 实例
   * @param options - 事件处理器配置
   */
  constructor(options?: PageLifecycleHandlers) {
    this.handlers = options || {}
  }

  /**
   * 开始监控页面生命周期
   * @returns 停止监听函数
   */
  observe = (): (() => void) => {
    // SSR 环境检测
    if (!isBrowser()) {
      this.getHandler(PAGE_LIFECYCLE_EVENT.SSR)()
      return () => {}
    }

    // DOMContentLoaded
    this.cleanupFns.push(
      onDOMContentLoaded((e) =>
        this.getHandler(PAGE_LIFECYCLE_EVENT.DOM_CONTENT_LOADED)(e)
      )
    )

    // Load
    this.cleanupFns.push(
      onWindowLoaded((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.LOAD)(e))
    )

    // BeforeUnload（复用 onPageUnload，useSafeMethod=false）
    this.cleanupFns.push(
      onPageUnload(
        () => this.getHandler(PAGE_LIFECYCLE_EVENT.BEFORE_UNLOADED)(),
        false
      )
    )

    // Unload
    this.cleanupFns.push(
      onUnload((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.UNLOAD)(e))
    )

    // PageShow (包含 BFCache 恢复)
    this.cleanupFns.push(
      onPageShow((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.PAGE_SHOW)(e))
    )

    // PageHide
    this.cleanupFns.push(
      onPageHide((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.PAGE_HIDE)(e))
    )

    // Visibility Change（复用 visibility）
    this.cleanupFns.push(
      visibility({
        visible: () => this.getHandler(PAGE_LIFECYCLE_EVENT.VISIBILITY_CHANGE)(),
        hidden: () => this.getHandler(PAGE_LIFECYCLE_EVENT.VISIBILITY_CHANGE)(),
      })
    )

    // Focus
    this.cleanupFns.push(
      onWindowFocus((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.FOCUS)(e))
    )

    // Blur
    this.cleanupFns.push(
      onWindowBlur((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.BLUR)(e))
    )

    // Online / Offline（复用 onNetworkChange）
    this.cleanupFns.push(
      onNetworkChange((online) => {
        if (online) {
          this.getHandler(PAGE_LIFECYCLE_EVENT.ONLINE)()
        } else {
          this.getHandler(PAGE_LIFECYCLE_EVENT.OFFLINE)()
        }
      })
    )

    // Popstate
    this.cleanupFns.push(
      onPopState((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.POPSTATE)(e))
    )

    // Hashchange
    this.cleanupFns.push(
      onHashChange((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.HASHCHANGE)(e))
    )

    // Freeze（Page Lifecycle API，部分浏览器支持）
    this.cleanupFns.push(
      onPageFreeze((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.FREEZE)(e))
    )

    // Resume（Page Lifecycle API，部分浏览器支持）
    this.cleanupFns.push(
      onPageResume((e) => this.getHandler(PAGE_LIFECYCLE_EVENT.RESUME)(e))
    )

    return () => this.stop()
  }

  /** 停止监听 */
  stop = (): void => {
    this.cleanupFns.forEach((cleanup) => cleanup())
    this.cleanupFns = []
  }

  private getHandler = <E extends PAGE_LIFECYCLE_EVENT>(event: E) =>
    this.handlers[event] || DEFAULT_HANDLERS[event]
}
