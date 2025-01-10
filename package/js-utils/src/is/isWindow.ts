/**
 * 对象是否是 window
 * @param el
 */
export default function isWindow<T>(el: any): el is Window | T {
  return el === window
}
