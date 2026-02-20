import { ChildProcess } from 'node:child_process'
import isPlainObj from 'is-plain-obj'
import { isUint8Array, uint8ArrayToString } from '@/execa-utils/uintArray'
import type { TemplateExpression, CommonResult } from '@/execa-types'

/**
 * 检查是否使用了模板字符串语法
 * @param templates - 模板字符串数组
 */
export const isTemplateString = (templates: unknown): templates is TemplateStringsArray =>
  Array.isArray(templates) && 
  'raw' in templates && 
  Array.isArray((templates as TemplateStringsArray).raw)

/**
 * 将 execa`file ...commandArguments` 转换为 execa(file, commandArguments)
 * @param templates - 模板字符串数组
 * @param expressions - 表达式数组
 */
export const parseTemplates = (
  templates: TemplateStringsArray,
  expressions: TemplateExpression[]
): [string, string[], object] => {
  let tokens: string[] = []

  for (const [index, template] of templates.entries()) {
    tokens = parseTemplate({
      templates,
      expressions,
      tokens,
      index,
      template,
    })
  }

  if (tokens.length === 0) {
    throw new TypeError('Template script must not be empty')
  }

  const [file, ...commandArguments] = tokens
  return [file, commandArguments, {}]
}

interface ParseTemplateOptions {
  templates: TemplateStringsArray
  expressions: TemplateExpression[]
  tokens: string[]
  index: number
  template: string
}

/**
 * 解析单个模板
 */
const parseTemplate = ({
  templates,
  expressions,
  tokens,
  index,
  template,
}: ParseTemplateOptions): string[] => {
  if (template === undefined) {
    throw new TypeError(`Invalid backslash sequence: ${templates.raw[index]}`)
  }

  const {
    nextTokens,
    leadingWhitespaces,
    trailingWhitespaces,
  } = splitByWhitespaces(template, templates.raw[index])

  const newTokens = concatTokens(tokens, nextTokens, leadingWhitespaces)

  if (index === expressions.length) {
    return newTokens
  }

  const expression = expressions[index]
  const expressionTokens = Array.isArray(expression)
    ? expression.map((expr) => parseExpression(expr))
    : [parseExpression(expression)]

  return concatTokens(newTokens, expressionTokens, trailingWhitespaces)
}

/**
 * 按空白字符分割
 * 类似于 string.split(/[ \t\r\n]+/)，但换行和制表符：
 * - 作为反斜杠序列输入时被忽略，如：`echo foo\n bar`
 * - 直接输入时不被忽略
 */
const splitByWhitespaces = (
  template: string,
  rawTemplate: string
): {
  nextTokens: string[]
  leadingWhitespaces: boolean
  trailingWhitespaces: boolean
} => {
  if (rawTemplate.length === 0) {
    return { nextTokens: [], leadingWhitespaces: false, trailingWhitespaces: false }
  }

  const nextTokens: string[] = []
  let templateStart = 0
  const leadingWhitespaces = DELIMITERS.has(rawTemplate[0])

  for (
    let templateIndex = 0, rawIndex = 0;
    templateIndex < template.length;
    templateIndex += 1, rawIndex += 1
  ) {
    const rawCharacter = rawTemplate[rawIndex]

    if (DELIMITERS.has(rawCharacter)) {
      if (templateStart !== templateIndex) {
        nextTokens.push(template.slice(templateStart, templateIndex))
      }
      templateStart = templateIndex + 1
    } else if (rawCharacter === '\\') {
      const nextRawCharacter = rawTemplate[rawIndex + 1]

      if (nextRawCharacter === '\n') {
        // 处理模板中的转义换行
        templateIndex -= 1
        rawIndex += 1
      } else if (nextRawCharacter === 'u' && rawTemplate[rawIndex + 2] === '{') {
        rawIndex = rawTemplate.indexOf('}', rawIndex + 3)
      } else {
        rawIndex += ESCAPE_LENGTH[nextRawCharacter] ?? 1
      }
    }
  }

  const trailingWhitespaces = templateStart === template.length

  if (!trailingWhitespaces) {
    nextTokens.push(template.slice(templateStart))
  }

  return { nextTokens, leadingWhitespaces, trailingWhitespaces }
}

/** 分隔符集合 */
const DELIMITERS = new Set([' ', '\t', '\r', '\n'])

/** 反斜杠转义序列的字符数：\0 \xXX 或 \uXXXX */
const ESCAPE_LENGTH: Record<string, number> = { x: 3, u: 5 }

/**
 * 连接 token
 */
const concatTokens = (
  tokens: string[],
  nextTokens: string[],
  isSeparated: boolean
): string[] => {
  if (isSeparated || tokens.length === 0 || nextTokens.length === 0) {
    return [...tokens, ...nextTokens]
  }

  return [
    ...tokens.slice(0, -1),
    `${tokens.at(-1)}${nextTokens[0]}`,
    ...nextTokens.slice(1),
  ]
}

/**
 * 处理模板字符串语法中的 ${expression}
 */
const parseExpression = (expression: TemplateExpression): string => {
  const typeOfExpression = typeof expression

  if (typeOfExpression === 'string') {
    return expression as string
  }

  if (typeOfExpression === 'number') {
    return String(expression)
  }

  if (
    isPlainObj(expression) &&
    ('stdout' in (expression as object) || 'isMaxBuffer' in (expression as object))
  ) {
    return getSubprocessResult(expression as CommonResult)
  }

  if (
    expression instanceof ChildProcess ||
    Object.prototype.toString.call(expression) === '[object Promise]'
  ) {
    throw new TypeError(
      'Unexpected subprocess in template expression. Please use ${await subprocess} instead of ${subprocess}.'
    )
  }

  throw new TypeError(`Unexpected "${typeOfExpression}" in template expression`)
}

/**
 * 获取子进程结果
 */
const getSubprocessResult = (result: CommonResult): string => {
  const { stdout } = result

  if (typeof stdout === 'string') {
    return stdout
  }

  if (isUint8Array(stdout)) {
    return uint8ArrayToString(stdout)
  }

  if (stdout === undefined) {
    throw new TypeError(
      'Missing result.stdout in template expression. This is probably due to the previous subprocess\' "stdout" option.'
    )
  }

  throw new TypeError(`Unexpected "${typeof stdout}" stdout in template expression`)
}
