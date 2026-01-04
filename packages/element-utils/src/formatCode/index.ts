import { format, Options as PrettierOptions } from 'prettier'
import parserBabel from 'prettier/plugins/babel'
import parserEstree from 'prettier/plugins/estree'
import parserGraphql from 'prettier/plugins/graphql'
import parserHtml from 'prettier/plugins/html'
import parserMarkdown from 'prettier/plugins/markdown'
import parserCss from 'prettier/plugins/postcss'
import parserTypescript from 'prettier/plugins/typescript'
import parserYaml from 'prettier/plugins/yaml'

import {
  CodeLanguage,
  FormatCodeOptions,
  FormatCodeResult,
  LANGUAGE_PARSER_MAP,
} from './interface'

/**
 * 默认 Prettier 配置
 */
const DEFAULT_PRETTIER_OPTIONS: Partial<PrettierOptions> = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 80,
  endOfLine: 'lf',
}

/**
 * 获取所有内置插件
 */
const getPlugins = () => [
  parserBabel,
  parserEstree,
  parserTypescript,
  parserHtml,
  parserCss,
  parserMarkdown,
  parserYaml,
  parserGraphql,
]

/**
 * 根据语言获取解析器
 */
const getParser = (language: CodeLanguage): string => {
  const parser = LANGUAGE_PARSER_MAP[language]

  if (!parser) {
    throw new Error(`Unsupported language: ${language}`)
  }

  return parser
}

/**
 * 检测代码语言（简单启发式）
 */
const detectLanguage = (code: string): CodeLanguage => {
  const trimmedCode = code.trim()

  // JSON 检测
  if (
    (trimmedCode.startsWith('{') && trimmedCode.endsWith('}')) ||
    (trimmedCode.startsWith('[') && trimmedCode.endsWith(']'))
  ) {
    try {
      JSON.parse(trimmedCode)
      return 'json'
    } catch {
      // 不是有效的 JSON，继续检测
    }
  }

  // HTML 检测
  if (trimmedCode.startsWith('<!DOCTYPE') || trimmedCode.startsWith('<html')) {
    return 'html'
  }

  // Vue 检测
  if (trimmedCode.includes('<template>') && trimmedCode.includes('<script')) {
    return 'vue'
  }

  // CSS 检测
  if (
    /^[.#@]?[\w-]+\s*\{/.test(trimmedCode) ||
    trimmedCode.includes('@media') ||
    trimmedCode.includes('@import')
  ) {
    // SCSS 检测
    if (trimmedCode.includes('$') || trimmedCode.includes('@mixin')) {
      return 'scss'
    }
    // Less 检测
    if (trimmedCode.includes('@') && trimmedCode.includes(':')) {
      return 'less'
    }
    return 'css'
  }

  // YAML 检测
  if (/^[\w-]+:\s/.test(trimmedCode) && !trimmedCode.includes('{')) {
    return 'yaml'
  }

  // Markdown 检测
  if (
    trimmedCode.startsWith('#') ||
    trimmedCode.includes('```') ||
    /^\s*[-*+]\s/.test(trimmedCode)
  ) {
    return 'markdown'
  }

  // GraphQL 检测
  if (
    trimmedCode.includes('query ') ||
    trimmedCode.includes('mutation ') ||
    trimmedCode.includes('type ') ||
    trimmedCode.includes('fragment ')
  ) {
    return 'graphql'
  }

  // TypeScript/TSX 检测
  if (
    trimmedCode.includes(': ') ||
    trimmedCode.includes('interface ') ||
    trimmedCode.includes('type ') ||
    trimmedCode.includes('<T>') ||
    trimmedCode.includes('as ')
  ) {
    if (trimmedCode.includes('<') && trimmedCode.includes('/>')) {
      return 'tsx'
    }
    return 'typescript'
  }

  // JSX 检测
  if (trimmedCode.includes('<') && trimmedCode.includes('/>')) {
    return 'jsx'
  }

  // 默认为 JavaScript
  return 'javascript'
}

/**
 * 格式化代码
 * 通过调用 Prettier 格式化内容并返回格式化后的字符串
 */
const formatCode = async (
  code: string,
  options: FormatCodeOptions = {}
): Promise<FormatCodeResult> => {
  const { language, prettierOptions = {} } = options

  if (typeof code !== 'string') {
    return {
      code: '',
      success: false,
      error: 'code must be a string',
    }
  }

  if (code.trim() === '') {
    return {
      code: '',
      success: true,
    }
  }

  try {
    // 确定语言和解析器
    const detectedLanguage = language || detectLanguage(code)
    const parser = getParser(detectedLanguage)

    // 合并配置
    const mergedOptions: PrettierOptions = {
      ...DEFAULT_PRETTIER_OPTIONS,
      ...prettierOptions,
      parser,
      plugins: getPlugins(),
    }

    // 格式化代码
    const formattedCode = await format(code, mergedOptions)

    return {
      code: formattedCode,
      success: true,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'

    return {
      code,
      success: false,
      error: errorMessage,
    }
  }
}

/**
 * 同步检查代码是否需要格式化
 */
export const needsFormatting = async (
  code: string,
  options: FormatCodeOptions = {}
): Promise<boolean> => {
  const result = await formatCode(code, options)

  if (!result.success) {
    return false
  }

  return result.code !== code
}

/**
 * 批量格式化代码
 */
export const formatCodeBatch = async (
  codes: Array<{ code: string; options?: FormatCodeOptions }>
): Promise<FormatCodeResult[]> => {
  const results = await Promise.all(
    codes.map(({ code, options }) => formatCode(code, options))
  )

  return results
}

export default formatCode
