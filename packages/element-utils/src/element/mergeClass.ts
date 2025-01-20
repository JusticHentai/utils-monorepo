import { isArray, isObject, isString } from '@justichentai/js-utils'

type Arg =
  | string
  | string[]
  | { [key: string]: any }
  | undefined
  | null
  | boolean

/**
 * 合并各种类型的 class 集合
 */
const mergeClass = (...args: Arg[]) => {
  let list: string[] = []

  for (const arg of args) {
    if (!arg) {
      continue
    }

    if (isString(arg)) {
      list.push(arg)
      continue
    }

    if (isArray(arg)) {
      list = list.concat(arg)
      continue
    }

    if (isObject(arg)) {
      Object.keys(arg).forEach((key) => {
        arg[key] && list.push(key) // false 过滤掉
      })

      continue
    }
  }

  return [...new Set(list)].join(' ')
}

export default mergeClass
