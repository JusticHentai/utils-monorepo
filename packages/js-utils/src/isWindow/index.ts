/**
 * 对象是否是 window
 * @param el
 */
const isWindow = (el: any): el is Window => {
  return el === window
}

export default isWindow
