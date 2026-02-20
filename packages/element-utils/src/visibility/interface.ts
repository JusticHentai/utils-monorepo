/** 页面可见性状态 */
export enum VisibilityState {
  /** 页面至少部分可见 */
  Visible = 'visible',
  /** 页面完全不可见 */
  Hidden = 'hidden',
  /** 页面正在预渲染 */
  Prerender = 'prerender',
}

/**
 * visible: 页面可见时触发
 * hidden: 页面不可见时触发
 * once: 是否只执行一次，默认 false
 * safariCompat: 是否兼容 Safari 的 pagehide 事件，默认 false
 */
export interface VisibilityOptions {
  /** 页面可见时触发 */
  visible?: () => void
  /** 页面不可见时触发 */
  hidden?: () => void
  /** 是否只执行一次，默认 false */
  once?: boolean
  /** 是否兼容 Safari 的 pagehide 事件（Safari 不触发 visibilitychange），默认 false */
  safariCompat?: boolean
}
