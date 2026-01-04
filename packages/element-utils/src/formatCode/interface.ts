import type { Options as PrettierOptions } from 'prettier'

/**
 * 支持的代码语言/解析器
 */
export type CodeLanguage =
  | 'javascript'
  | 'typescript'
  | 'jsx'
  | 'tsx'
  | 'json'
  | 'html'
  | 'css'
  | 'scss'
  | 'less'
  | 'markdown'
  | 'yaml'
  | 'graphql'
  | 'vue'

/**
 * 格式化代码配置项
 */
export interface FormatCodeOptions {
  /** 代码语言/解析器 */
  language?: CodeLanguage
  /** Prettier 配置选项 */
  prettierOptions?: Partial<PrettierOptions>
}

/**
 * 格式化结果
 */
export interface FormatCodeResult {
  /** 格式化后的代码 */
  code: string
  /** 是否成功 */
  success: boolean
  /** 错误信息（如果失败） */
  error?: string
}

/**
 * 语言到解析器的映射
 */
export const LANGUAGE_PARSER_MAP: Record<CodeLanguage, string> = {
  javascript: 'babel',
  typescript: 'typescript',
  jsx: 'babel',
  tsx: 'typescript',
  json: 'json',
  html: 'html',
  css: 'css',
  scss: 'scss',
  less: 'less',
  markdown: 'markdown',
  yaml: 'yaml',
  graphql: 'graphql',
  vue: 'vue',
}
