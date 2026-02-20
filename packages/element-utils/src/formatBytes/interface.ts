/** 字节单位 */
export enum ByteUnit {
  /** 字节 */
  B = 'B',
  /** 千字节 */
  KB = 'KB',
  /** 兆字节 */
  MB = 'MB',
  /** 吉字节 */
  GB = 'GB',
  /** 太字节 */
  TB = 'TB',
  /** 拍字节 */
  PB = 'PB',
}

/** 单位列表，按大小排序 */
export const UNITS: ByteUnit[] = [
  ByteUnit.B,
  ByteUnit.KB,
  ByteUnit.MB,
  ByteUnit.GB,
  ByteUnit.TB,
  ByteUnit.PB,
]

/** 每个单位的字节数 */
export const UNIT_BYTES: Record<ByteUnit, number> = {
  [ByteUnit.B]: 1,
  [ByteUnit.KB]: 1024,
  [ByteUnit.MB]: 1024 ** 2,
  [ByteUnit.GB]: 1024 ** 3,
  [ByteUnit.TB]: 1024 ** 4,
  [ByteUnit.PB]: 1024 ** 5,
}

/** 对数常量，用于计算单位索引 */
export const LOG_1024 = Math.log(1024)

/** formatBytes 配置选项 */
export interface FormatBytesOptions {
  /** 小数位数，默认值：2 */
  decimals?: number
  /** 指定输出单位，不传则自动选择合适单位 */
  unit?: ByteUnit
}

/** formatBytes 返回结果 */
export interface FormatBytesResult {
  /** 格式化后的数值 */
  value: number
  /** 单位 */
  unit: ByteUnit
  /** 格式化后的字符串（如 "1.50 MB"） */
  formatted: string
}
