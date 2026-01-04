/**
 * URL 解析结果
 */
export interface ParsedUrl {
  /** 完整 URL */
  href: string
  /** 协议 (http, https, etc.) */
  protocol: string
  /** 主机名 */
  hostname: string
  /** 端口号 */
  port: string
  /** 主机 (hostname:port) */
  host: string
  /** 路径 */
  pathname: string
  /** 路径片段数组 */
  pathSegments: string[]
  /** 查询字符串 (包含 ?) */
  search: string
  /** 查询参数对象 */
  query: Record<string, string | string[]>
  /** 哈希值 (包含 #) */
  hash: string
  /** 哈希值 (不包含 #) */
  hashValue: string
  /** 用户名 */
  username: string
  /** 密码 */
  password: string
  /** 来源 (protocol://host) */
  origin: string
}

/**
 * URL 解析配置
 */
export interface ParseUrlOptions {
  /** 是否解码 URL 组件 */
  decode?: boolean
  /** 是否将重复的查询参数合并为数组 */
  arrayFormat?: boolean
}

/**
 * URL 构建配置
 */
export interface BuildUrlOptions {
  /** 基础 URL */
  baseUrl?: string
  /** 路径 */
  pathname?: string
  /** 路径片段 */
  pathSegments?: string[]
  /** 查询参数 */
  query?: Record<string, string | number | boolean | (string | number | boolean)[]>
  /** 哈希值 */
  hash?: string
}
