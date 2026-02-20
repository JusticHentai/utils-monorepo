// 文件系统工具类型定义
import type fs from 'node:fs'

/** 复制操作的过滤函数类型 */
export type CopyFilterFunction = (src: string, dest: string) => boolean | Promise<boolean>

/** 复制操作配置选项 */
export interface CopyOptions {
  /** 是否覆盖已存在的文件或目录，默认值：true */
  overwrite?: boolean
  /** 当 overwrite 为 false 且目标已存在时是否抛出错误，默认值：false */
  errorOnExist?: boolean
  /** 是否解引用符号链接，默认值：false */
  dereference?: boolean
  /** 是否保留原始文件的时间戳，默认值：false */
  preserveTimestamps?: boolean
  /** 过滤函数，返回 true 表示复制该文件/目录，返回 false 表示忽略 */
  filter?: CopyFilterFunction
  /** @deprecated 使用 overwrite 替代 */
  clobber?: boolean
}

/** 移动操作配置选项 */
export interface MoveOptions {
  /** 是否覆盖已存在的文件或目录，默认值：false */
  overwrite?: boolean
  /** @deprecated 使用 overwrite 替代 */
  clobber?: boolean
  /** 是否解引用符号链接 */
  dereference?: boolean
}

/** 确保目录存在的配置选项 */
export interface EnsureDirOptions {
  /** 目录权限模式，默认值：0o777 */
  mode?: number
}

/** 符号链接类型 */
export type SymlinkType = 'file' | 'dir' | 'junction'

/** JSON 读取配置选项 */
export interface ReadJsonOptions {
  /** 文件编码，默认值：'utf-8' */
  encoding?: BufferEncoding
  /** 是否在 JSON 解析失败时抛出错误，默认值：true */
  throws?: boolean
  /** JSON 解析的 reviver 函数 */
  reviver?: (this: unknown, key: string, value: unknown) => unknown
}

/** JSON 写入配置选项 */
export interface WriteJsonOptions {
  /** 缩进空格数或缩进字符串 */
  spaces?: number | string
  /** 行尾字符，默认值：'\n' */
  EOL?: string
  /** JSON.stringify 的 replacer 参数 */
  replacer?: (this: unknown, key: string, value: unknown) => unknown | (string | number)[]
  /** 文件编码，默认值：'utf-8' */
  encoding?: BufferEncoding
  /** 文件权限模式 */
  mode?: number
  /** 文件系统标志 */
  flag?: string
}

/** 输出文件配置选项 */
export type OutputFileOptions = string | fs.WriteFileOptions

/** 路径检查结果 */
export interface PathStats {
  /** 源文件状态 */
  srcStat: fs.BigIntStats
  /** 目标文件状态（如果不存在则为 null） */
  destStat: fs.BigIntStats | null
  /** 是否仅改变大小写（用于 move 操作） */
  isChangingCase?: boolean
}

/** 符号链接路径解析结果 */
export interface SymlinkPaths {
  /** 相对于当前工作目录的路径 */
  toCwd: string
  /** 相对于目标链接的路径 */
  toDst: string
}

// 导出工具函数
export { utimesMillis, utimesMillisSync } from './utimes'
export { checkPath } from './checkPath'
export { asyncIteratorConcurrentProcess } from './asyncIterator'
export { default as stat } from './stat'
