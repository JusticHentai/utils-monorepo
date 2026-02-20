import isArray from '../isArray'
import isObject from '../isObject'
import { WalkOptions } from './interface'

/**
 * 遍历对象并处理值
 * @param options 遍历选项
 * @returns 遍历完成
 */
const walk = async ({ obj, cb, parent = [] }: WalkOptions) => {
  for (const key in obj) {
    const value = obj[key]

    if (isObject(value) || isArray(value)) {
      await walk({ obj: value, cb, parent: parent.concat([key]) })
    } else {
      obj[key] = await cb({
        key,
        value,
        index: obj,
        parent,
      })
    }
  }
}

export default walk
