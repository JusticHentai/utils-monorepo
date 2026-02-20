/** 页面生命周期事件类型 */
export enum PAGE_LIFECYCLE_EVENT {
  /** DOMContentLoaded - DOM 解析完成 */
  DOM_CONTENT_LOADED = 'DOMContentLoaded',
  /** load - 页面及资源加载完成 */
  LOAD = 'load',
  /** beforeunload - 页面即将卸载 */
  BEFORE_UNLOADED = 'beforeunload',
  /** unload - 页面卸载 */
  UNLOAD = 'unload',
  /** SSR - 服务端渲染环境 */
  SSR = 'ssr',
  /** pageshow - 页面展示（含 BFCache 恢复） */
  PAGE_SHOW = 'pageshow',
  /** pagehide - 页面隐藏 */
  PAGE_HIDE = 'pagehide',
  /** visibilitychange - 页面可见性变化 */
  VISIBILITY_CHANGE = 'visibilitychange',
  /** focus - 窗口获得焦点 */
  FOCUS = 'focus',
  /** blur - 窗口失去焦点 */
  BLUR = 'blur',
  /** online - 网络恢复连接 */
  ONLINE = 'online',
  /** offline - 网络断开连接 */
  OFFLINE = 'offline',
  /** popstate - 浏览器前进/后退 */
  POPSTATE = 'popstate',
  /** hashchange - URL hash 变化 */
  HASHCHANGE = 'hashchange',
  /** freeze - 页面被冻结（Page Lifecycle API） */
  FREEZE = 'freeze',
  /** resume - 页面从冻结中恢复 */
  RESUME = 'resume',
}

/** 页面生命周期事件处理器 */
export interface PageLifecycleHandlers {
  [PAGE_LIFECYCLE_EVENT.DOM_CONTENT_LOADED]?: (e?: Event) => void
  [PAGE_LIFECYCLE_EVENT.LOAD]?: (e?: Event) => void
  [PAGE_LIFECYCLE_EVENT.BEFORE_UNLOADED]?: (e?: BeforeUnloadEvent) => void
  [PAGE_LIFECYCLE_EVENT.UNLOAD]?: (e?: Event) => void
  [PAGE_LIFECYCLE_EVENT.SSR]?: () => void
  [PAGE_LIFECYCLE_EVENT.PAGE_SHOW]?: (e?: PageTransitionEvent) => void
  [PAGE_LIFECYCLE_EVENT.PAGE_HIDE]?: (e?: PageTransitionEvent) => void
  [PAGE_LIFECYCLE_EVENT.VISIBILITY_CHANGE]?: (e?: Event) => void
  [PAGE_LIFECYCLE_EVENT.FOCUS]?: (e?: FocusEvent) => void
  [PAGE_LIFECYCLE_EVENT.BLUR]?: (e?: FocusEvent) => void
  [PAGE_LIFECYCLE_EVENT.ONLINE]?: (e?: Event) => void
  [PAGE_LIFECYCLE_EVENT.OFFLINE]?: (e?: Event) => void
  [PAGE_LIFECYCLE_EVENT.POPSTATE]?: (e?: PopStateEvent) => void
  [PAGE_LIFECYCLE_EVENT.HASHCHANGE]?: (e?: HashChangeEvent) => void
  [PAGE_LIFECYCLE_EVENT.FREEZE]?: (e?: Event) => void
  [PAGE_LIFECYCLE_EVENT.RESUME]?: (e?: Event) => void
}

/** 默认事件处理器（仅打印日志） */
export const DEFAULT_HANDLERS: Record<PAGE_LIFECYCLE_EVENT, () => void> = {
  [PAGE_LIFECYCLE_EVENT.DOM_CONTENT_LOADED]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.DOM_CONTENT_LOADED}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.LOAD]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.LOAD}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.BEFORE_UNLOADED]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.BEFORE_UNLOADED}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.UNLOAD]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.UNLOAD}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.SSR]: () =>
    console.info(`[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.SSR}] default info`),
  [PAGE_LIFECYCLE_EVENT.PAGE_SHOW]: (e?: PageTransitionEvent) => {
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.PAGE_SHOW}] default info`
    )
    if (e?.persisted) {
      console.info(
        `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.PAGE_SHOW}] Page restored from BFCache`
      )
    }
  },
  [PAGE_LIFECYCLE_EVENT.PAGE_HIDE]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.PAGE_HIDE}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.VISIBILITY_CHANGE]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.VISIBILITY_CHANGE}] Visibility: ${typeof document !== 'undefined' ? document.visibilityState : 'unknown'}`
    ),
  [PAGE_LIFECYCLE_EVENT.FOCUS]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.FOCUS}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.BLUR]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.BLUR}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.ONLINE]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.ONLINE}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.OFFLINE]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.OFFLINE}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.POPSTATE]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.POPSTATE}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.HASHCHANGE]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.HASHCHANGE}] default info`
    ),
  [PAGE_LIFECYCLE_EVENT.FREEZE]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.FREEZE}] Page frozen`
    ),
  [PAGE_LIFECYCLE_EVENT.RESUME]: () =>
    console.info(
      `[onPageLifecycle][${PAGE_LIFECYCLE_EVENT.RESUME}] Page resumed`
    ),
}
