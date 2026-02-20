/**
 * 绑定对象上的多个方法到对象自身
 * @param object - 要绑定方法的对象
 * @param methodNames - 要绑定的方法名数组
 * @returns 返回绑定后的对象
 * @example
 * const view = {
 *   label: 'docs',
 *   click: function() { console.log('clicked ' + this.label) },
 *   hover: function() { console.log('hovered ' + this.label) }
 * }
 *
 * bindAll(view, ['click', 'hover'])
 *
 * // 现在 click 和 hover 方法被绑定到 view 对象上
 * const { click } = view
 * click()
 * // => 'clicked docs'
 */
const bindAll = <T extends Record<string, unknown>>(
  object: T,
  methodNames: string[]
): T => {
  for (const key of methodNames) {
    const fn = object[key]
    if (typeof fn === 'function') {
      ;(object as Record<string, unknown>)[key] = fn.bind(object)
    }
  }
  return object
}

export default bindAll
