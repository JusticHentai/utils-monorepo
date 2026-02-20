import { platform } from 'node:process'
import { stripVTControlCharacters } from 'node:util'

/**
 * 计算 result.command 和 result.escapedCommand
 * @param filePath - 文件路径
 * @param rawArguments - 参数数组
 */
export const joinCommand = (
  filePath: string,
  rawArguments: readonly string[]
): { command: string; escapedCommand: string } => {
  const fileAndArguments = [filePath, ...rawArguments]
  const command = fileAndArguments.join(' ')
  const escapedCommand = fileAndArguments
    .map((fileAndArgument) => quoteString(escapeControlCharacters(fileAndArgument)))
    .join(' ')
  return { command, escapedCommand }
}

/**
 * 移除 ANSI 序列并转义控制字符和换行符
 * @param lines - 要转义的字符串
 */
export const escapeLines = (lines: string): string =>
  stripVTControlCharacters(lines)
    .split('\n')
    .map((line) => escapeControlCharacters(line))
    .join('\n')

/**
 * 转义控制字符
 */
const escapeControlCharacters = (line: string): string =>
  line.replaceAll(SPECIAL_CHAR_REGEXP, (character) => escapeControlCharacter(character))

/**
 * 转义单个控制字符
 */
const escapeControlCharacter = (character: string): string => {
  const commonEscape = COMMON_ESCAPES[character]
  if (commonEscape !== undefined) {
    return commonEscape
  }

  const codepoint = character.codePointAt(0)!
  const codepointHex = codepoint.toString(16)
  return codepoint <= ASTRAL_START
    ? `\\u${codepointHex.padStart(4, '0')}`
    : `\\U${codepointHex}`
}

/**
 * 获取特殊字符正则表达式
 * 需要转义的字符包括控制字符和换行符
 */
const getSpecialCharRegExp = (): RegExp => {
  try {
    // 当 Node.js 没有 ICU 支持时会抛出错误
    return new RegExp('\\p{Separator}|\\p{Other}', 'gu')
  } catch {
    // 没有 ICU 支持时的后备方案
    // eslint-disable-next-line no-control-regex
    return /[\s\u0000-\u001F\u007F-\u009F\u00AD]/g
  }
}

const SPECIAL_CHAR_REGEXP = getSpecialCharRegExp()

/** 常见转义字符映射 */
const COMMON_ESCAPES: Record<string, string> = {
  ' ': ' ',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t',
}

/** \u 表示法的最大码点 */
const ASTRAL_START = 65_535

/**
 * 引用字符串，使其可以安全地在 shell 中使用
 * @param escapedArgument - 已转义的参数
 */
const quoteString = (escapedArgument: string): string => {
  if (NO_ESCAPE_REGEXP.test(escapedArgument)) {
    return escapedArgument
  }

  return platform === 'win32'
    ? `"${escapedArgument.replaceAll('"', '""')}"`
    : `'${escapedArgument.replaceAll("'", "'\\''")}'`
}

const NO_ESCAPE_REGEXP = /^[\w./-]+$/
