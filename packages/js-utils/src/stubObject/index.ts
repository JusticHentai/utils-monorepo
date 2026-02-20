/**
 * 返回空对象的函数
 * @returns 返回新的空对象
 * @example
 * stubObject()
 * // => {}
 */
const stubObject = (): Record<string, never> => {
  return {}
}

export default stubObject
