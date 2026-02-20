/** 内存信息 */
export interface MemoryInfo {
  /** JS 堆大小限制（字节） */
  jsHeapSizeLimit: number
  /** JS 堆总大小（字节） */
  totalJSHeapSize: number
  /** JS 堆已用大小（字节） */
  usedJSHeapSize: number
}

/** 页面信息 */
export interface PageInfo {
  /** 当前页面 URL */
  url: string
  /** 页面标题 */
  title: string
  /** 来源页面 URL */
  referrer: string
  /** 用户代理字符串 */
  userAgent: string
  /** 屏幕分辨率（如 "1920x1080"） */
  screenResolution: string
  /** 视口大小（如 "1200x800"） */
  viewport: string
  /** 设备像素比 */
  devicePixelRatio: number
  /** 浏览器语言 */
  language: string
  /** 操作系统平台 */
  platform: string
  /** 时区 */
  timezone: string
  /** 网络连接类型（如 "wifi"、"cellular"） */
  networkType?: string
  /** 有效连接类型（如 "4g"、"3g"） */
  effectiveType?: string
  /** 内存信息 */
  memory?: MemoryInfo
}
