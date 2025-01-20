/**
 * el 是否是纯元素
 */
const isPureElement = (el: any): el is string | number => {
  return typeof el === 'string' || typeof el === 'number'
}

export default isPureElement
