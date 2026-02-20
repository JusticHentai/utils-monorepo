/**
 * 资源加载监控类型定义
 */

/**
 * 资源类型
 * - script: JavaScript 脚本
 * - link: 链接资源（CSS 等）
 * - img: 图片
 * - css: CSS 样式
 * - fetch: Fetch 请求
 * - xmlhttprequest: XHR 请求
 * - beacon: Beacon 请求
 * - video: 视频
 * - audio: 音频
 * - font: 字体
 * - other: 其他资源
 */
export type ResourceType =
  | 'script'
  | 'link'
  | 'img'
  | 'css'
  | 'fetch'
  | 'xmlhttprequest'
  | 'beacon'
  | 'video'
  | 'audio'
  | 'font'
  | 'other'

/** 资源性能指标 */
export interface ResourceMetrics {
  /** 资源名称 */
  name: string
  /** 资源类型 */
  initiatorType: ResourceType | string
  /** 开始时间 */
  startTime: number
  /** 持续时间 */
  duration: number
  /** 传输大小 */
  transferSize: number
  /** 解码后大小 */
  decodedBodySize: number
  /** 编码后大小 */
  encodedBodySize: number
  /** DNS 耗时 */
  dns: number
  /** TCP 耗时 */
  tcp: number
  /** TLS 耗时 */
  tls: number
  /** TTFB */
  ttfb: number
  /** 内容下载耗时 */
  download: number
  /** 是否来自缓存 */
  fromCache: boolean
  /** 协议 */
  protocol: string
}

/** 资源回调函数类型 */
export type ResourceCallback = (resources: ResourceMetrics[]) => void

/** 资源过滤函数类型 */
export type ResourceFilter = (entry: PerformanceResourceTiming) => boolean

/** 资源监控配置选项 */
export interface ResourceMonitorOptions {
  /** 资源过滤函数 */
  filter?: ResourceFilter
  /** 批量大小，默认值：10 */
  batchSize?: number
  /** 批量延迟（ms），默认值：1000 */
  batchDelay?: number
}

/** 资源统计结果 */
export interface ResourceStats {
  /** 资源总数 */
  total: number
  /** 缓存资源数 */
  cached: number
  /** 总传输大小 */
  totalSize: number
  /** 总持续时间 */
  totalDuration: number
  /** 按类型统计 */
  byType: Record<string, { count: number; size: number; duration: number }>
}
