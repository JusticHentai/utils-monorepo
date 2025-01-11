import { isObject } from '@justichentai/is'
import { IObject } from '@justichentai/types-utils'

/**
 * 深度合并两个对象
 * 更方便设置多层的 props
 * 同一层的值第二个参数优先级更高
 * @param defaultObj
 * @param currentObj
 */
export default function deepMerge(
  defaultObj: IObject,
  currentObj: IObject
): IObject {
  // 合并当前层
  const res = { ...defaultObj, ...currentObj }

  // 遍历合并
  for (const key in res) {
    // 表示当前 key 没冲突直接下一个 key
    if (!defaultObj[key] || !currentObj[key]) {
      continue
    }

    // 有冲突
    if (isObject(defaultObj[key]) && isObject(currentObj[key])) {
      Object.assign(res, {
        [key]: deepMerge(defaultObj[key], currentObj[key]),
      })
    } else {
      Object.assign(res, {
        [key]: currentObj[key],
      })
    }
  }

  return res
}
