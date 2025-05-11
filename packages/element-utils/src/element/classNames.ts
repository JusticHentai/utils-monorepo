import { isArray, isObject, isString } from '@justichentai/js-utils'

type ClassNamesArg =
  | string
  | string[]
  | { [key: string]: any }
  | undefined
  | null
  | boolean

/**
 * 合并多种类型的 class 名称
 * @param {...ClassNamesArg} args - 可接受字符串/数组/对象等多种类型参数
 * @returns {string} 合并去重后的 class 字符串
 */
export default function (...args: ClassNamesArg[]): string {
  let classNames: string[] = []

  for (const arg of args) {
    if (!arg) {
      continue
    }

    // 处理字符串类型
    if (isString(arg)) {
      classNames.push(arg)
      continue
    }

    // 处理数组类型
    if (isArray(arg)) {
      classNames = classNames.concat(arg)
      continue
    }

    // 处理对象类型（键值为真时保留键名）
    if (isObject(arg)) {
      Object.keys(arg).forEach((k) => {
        arg[k] && classNames.push(k)
      })
    }
  }

  // 去重后合并为字符串
  return [...new Set(classNames)].join(' ')
}
