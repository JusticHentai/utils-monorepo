/**
 * 对象是否是 window
 * @param el
 */
const isWindow = <T>(el: any): el is Window | T => {
  return el === window
}

export default isWindow
