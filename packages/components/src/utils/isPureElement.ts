import { ReactNode } from 'react'

/**
 * 是否是纯元素
 * @param el
 */
export default function isPureElement(el: ReactNode): el is string | number {
  return typeof el === 'string' || typeof el === 'number'
}
