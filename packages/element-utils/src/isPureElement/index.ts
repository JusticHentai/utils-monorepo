import { ReactNode } from 'react'

/**
 * 判断 el 是否是纯元素
 * @param el 元素
 * @returns 是否是纯元素
 */
const isPureElement = (el: ReactNode): el is string | number => {
  return typeof el === 'string' || typeof el === 'number'
}

export default isPureElement
