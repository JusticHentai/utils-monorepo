/**
 * Mock 数据规则类型
 */
export type MockRule =
  | StringRule
  | NumberRule
  | BooleanRule
  | DateRule
  | ArrayRule
  | ObjectRule
  | EnumRule
  | CustomRule
  | IncrementRule
  | UUIDRule
  | EmailRule
  | PhoneRule
  | ImageRule
  | ParagraphRule

/**
 * 字符串规则
 */
export interface StringRule {
  type: 'string'
  /** 最小长度 */
  minLength?: number
  /** 最大长度 */
  maxLength?: number
  /** 字符集 */
  charset?: 'alpha' | 'alphanumeric' | 'numeric' | 'chinese'
  /** 前缀 */
  prefix?: string
  /** 后缀 */
  suffix?: string
}

/**
 * 数字规则
 */
export interface NumberRule {
  type: 'number'
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 小数位数 */
  decimals?: number
}

/**
 * 布尔规则
 */
export interface BooleanRule {
  type: 'boolean'
  /** true 的概率 (0-1) */
  probability?: number
}

/**
 * 日期规则
 */
export interface DateRule {
  type: 'date'
  /** 开始日期 */
  start?: Date | string
  /** 结束日期 */
  end?: Date | string
  /** 输出格式 */
  format?: 'timestamp' | 'iso' | 'date'
}

/**
 * 数组规则
 */
export interface ArrayRule {
  type: 'array'
  /** 数组元素规则 */
  itemRule: MockRule
  /** 最小长度 */
  minLength?: number
  /** 最大长度 */
  maxLength?: number
}

/**
 * 对象规则
 */
export interface ObjectRule {
  type: 'object'
  /** 对象属性规则 */
  properties: Record<string, MockRule>
}

/**
 * 枚举规则
 */
export interface EnumRule {
  type: 'enum'
  /** 枚举值列表 */
  values: unknown[]
}

/**
 * 自定义规则
 */
export interface CustomRule {
  type: 'custom'
  /** 自定义生成函数 */
  generator: (index: number) => unknown
}

/**
 * 自增规则
 */
export interface IncrementRule {
  type: 'increment'
  /** 起始值 */
  start?: number
  /** 步长 */
  step?: number
}

/**
 * UUID 规则
 */
export interface UUIDRule {
  type: 'uuid'
}

/**
 * 邮箱规则
 */
export interface EmailRule {
  type: 'email'
  /** 域名列表 */
  domains?: string[]
}

/**
 * 手机号规则
 */
export interface PhoneRule {
  type: 'phone'
  /** 国家代码 */
  countryCode?: string
}

/**
 * 图片规则
 */
export interface ImageRule {
  type: 'image'
  /** 宽度 */
  width?: number
  /** 高度 */
  height?: number
}

/**
 * 段落规则
 */
export interface ParagraphRule {
  type: 'paragraph'
  /** 最小句子数 */
  minSentences?: number
  /** 最大句子数 */
  maxSentences?: number
}

/**
 * Mock 数据生成器配置
 */
export interface MockDataOptions {
  /** 生成数量 */
  count: number
  /** 数据规则 */
  schema: Record<string, MockRule>
  /** 随机种子（用于可重复生成） */
  seed?: number
}

/**
 * Mock 数据生成器实例
 */
export interface MockDataInstance {
  /** 生成单条数据 */
  generateOne: <T = Record<string, unknown>>(index?: number) => T
  /** 生成多条数据 */
  generateMany: <T = Record<string, unknown>>(count?: number) => T[]
  /** 重置自增计数器 */
  reset: () => void
}
