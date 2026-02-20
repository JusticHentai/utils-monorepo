/**
 * PerformanceNavigationTiming.type 原始值
 */
export enum RAW_NAVIGATION_TYPE {
  NAVIGATE = 'navigate',
  RELOAD = 'reload',
  BACK_FORWARD = 'back_forward',
  PRERENDER = 'prerender',
}

/**
 * 导航类型
 */
export enum NAVIGATION_TYPE {
  /** 常规导航 - 用户通过点击链接、输入URL、表单提交等方式进入页面 */
  NAVIGATE = 'navigate',
  /** 页面刷新 - 用户按 F5、Ctrl+R 或点击刷新按钮 */
  RELOAD = 'reload',
  /** 前进/后退 - 用户通过浏览器的前进或后退按钮导航 */
  BACK_FORWARD = 'back-forward',
  /** BFCache 恢复 - 页面从浏览器的后退/前进缓存中恢复 */
  BACK_FORWARD_CACHE = 'back-forward-cache',
  /** 预渲染激活 - 页面通过 Speculation Rules API 预渲染后激活 */
  PRERENDER = 'prerender',
}

/** 导航类型映射表 */
export const NAVIGATION_TYPE_MAP: Record<string, NAVIGATION_TYPE> = {
  [RAW_NAVIGATION_TYPE.NAVIGATE]: NAVIGATION_TYPE.NAVIGATE,
  [RAW_NAVIGATION_TYPE.RELOAD]: NAVIGATION_TYPE.RELOAD,
  [RAW_NAVIGATION_TYPE.BACK_FORWARD]: NAVIGATION_TYPE.BACK_FORWARD,
  [RAW_NAVIGATION_TYPE.PRERENDER]: NAVIGATION_TYPE.PRERENDER,
}
