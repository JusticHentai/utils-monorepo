/**
 * 检查值是否为普通对象（由 Object 构造函数创建或原型为 null）
 *
 * 判断流程：
 * 1. 排除 null 和非对象类型
 * 2. 获取原型，如果原型为 null（Object.create(null)），直接返回 true
 * 3. 从原型上取 constructor，进行三重验证：
 *    - typeof Ctor === 'function'：构造函数必须是函数
 *    - Ctor instanceof Ctor：只有 Object 满足"自己是自己的实例"
 *      因为 Object 的原型链：Object → Function.prototype → Object.prototype
 *      而 Array instanceof Array → false（Array 的原型链上没有 Array.prototype）
 *    - Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object)：
 *      比较构造函数的源码字符串，确保是原生的 Object 构造函数
 *      防止跨 iframe/realm 环境中 Object 不是同一个引用的问题
 *
 * @param value - 要检查的值
 * @returns 如果值是普通对象返回 true
 * @example
 * isPlainObject({})                    // => true
 * isPlainObject({ a: 1 })              // => true
 * isPlainObject(Object.create(null))   // => true
 * isPlainObject(new Object())          // => true
 *
 * isPlainObject([1, 2, 3])             // => false
 * isPlainObject(new Date())            // => false
 * isPlainObject(null)                  // => false
 *
 * function Foo() { this.a = 1 }
 * isPlainObject(new Foo())             // => false
 */
const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  // 排除 null 和非对象
  if (value == null || typeof value !== 'object') return false

  // 获取原型
  const proto = Object.getPrototypeOf(value)

  // 原型为 null（Object.create(null) 创建的对象）
  if (proto === null) return true

  // 从原型上获取 constructor（确保是原型自身的属性，而非继承来的）
  const Ctor =
    Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
    proto.constructor

  return (
    // 1. 构造函数是函数类型
    typeof Ctor === 'function' &&
    // 2. 构造函数是自身的实例（只有 Object 满足，Array/Date 等都不满足）
    Ctor instanceof Ctor &&
    // 3. 构造函数源码与 Object 一致（处理跨 iframe/realm 场景）
    Function.prototype.toString.call(Ctor) ===
      Function.prototype.toString.call(Object)
  )
}

export default isPlainObject
