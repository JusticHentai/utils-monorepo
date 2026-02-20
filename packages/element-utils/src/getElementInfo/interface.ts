/** 默认文本截断最大长度 */
export const DEFAULT_MAX_LENGTH = 100

/** 元素信息 */
export interface ElementInfo {
  /** 标签名（小写） */
  tagName: string
  /** 元素 ID */
  id?: string
  /** 元素类名 */
  className?: string
  /** 文本内容（截断） */
  innerText?: string
  /** XPath 路径 */
  xpath?: string
}

/** 配置选项 */
export interface GetElementInfoOptions {
  /** 文本截断最大长度，默认值：100 */
  maxLength?: number
}
