import { isArray, isObject, isString } from '@justichentai/is'

type Arg =
  | string
  | string[]
  | { [key: string]: any }
  | undefined
  | null
  | boolean

/**
 * 将各种类型的 className 转成最终输出的 string
 * @param args className 参数合并组成的数组
 */

export default function mergeClassName(...args: Arg[]): string {
  let list: string[] = []

  for (const arg of args) {
    if (!arg) {
      continue
    }

    if (isString(arg)) {
      list.push(arg)
    } else if (isArray(arg)) {
      list = list.concat(arg)
    } else if (isObject(arg)) {
      Object.keys(arg).forEach((k) => {
        // 判断 value 是否允许 用于 obj key 存在但值否定的场景
        if (arg[k]) {
          list.push(k)
        }
      })
    } else {
      console.warn(true, 'arguments 必须是 string/array/object 中的一个')
    }
  }

  return [...new Set(list)].join(' ')
}
