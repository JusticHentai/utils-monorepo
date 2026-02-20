/** 导航性能指标 */
export interface NavigationMetrics {
  /** 卸载耗时 */
  unload: number
  /** DNS 缓存耗时 */
  dnsCache: number
  /** DNS 查询耗时 */
  dns: number
  /** TCP 连接耗时 */
  tcp: number
  /** TLS 握手耗时 */
  tls: number
  /** 首字节时间 */
  ttfb: number
  /** 内容传输耗时 */
  trans: number
  /** DOM 解析耗时 */
  domParse: number
  /** DOM 完成耗时 */
  domComplete: number
  /** Load 事件耗时 */
  loadEvent: number
  /** 重定向耗时 */
  redirect: number
  /** 请求耗时 */
  request: number
  /** 响应耗时 */
  response: number
  /** DOM Ready 时间 */
  domReady: number
  /** 页面完全加载时间 */
  pageLoad: number
}
