/**
 * 创建一个继承 prototype 的对象
 * @param prototype - 要继承的原型
 * @param properties - 要分配的属性
 * @returns 返回新对象
 * @example
 * function Shape() {
 *   this.x = 0
 *   this.y = 0
 * }
 *
 * function Circle() {
 *   Shape.call(this)
 * }
 *
 * Circle.prototype = create(Shape.prototype, {
 *   constructor: Circle
 * })
 */
const create = <T extends object>(
  prototype: T | null,
  properties?: Record<string, unknown>
): T => {
  const result = Object.create(prototype) as T

  if (properties != null) {
    for (const key of Object.keys(properties)) {
      ;(result as Record<string, unknown>)[key] = properties[key]
    }
  }

  return result
}

export default create
