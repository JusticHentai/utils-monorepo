/**
 * 判断 el 是否是纯元素
 * @param el 元素
 * @returns 是否是纯元素
 */
const isPureElement = (
  el: HTMLElement | string | number
): el is string | number => {
  return typeof el === 'string' || typeof el === 'number'
}

export default isPureElement
