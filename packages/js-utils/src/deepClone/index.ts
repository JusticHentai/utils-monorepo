/**
 * 深拷贝
 * 支持类型：普通对象、数组、Date、RegExp、Symbol、Map、Set、ArrayBuffer、TypedArray、DataView、Error
 * @param obj 要拷贝的对象
 * @param hash 用于存储已经拷贝过的对象，处理循环引用
 *             使用 WeakMap 而非 Map 的原因：
 *             1. WeakMap 的键必须是对象，值可以是任意类型；Map 的键可以是任意类型
 *             2. WeakMap 的键是弱引用，不会阻止垃圾回收；Map 的键是强引用，会阻止垃圾回收
 *             3. 深拷贝完成后，原对象可能不再被使用，WeakMap 允许这些对象被垃圾回收，避免内存泄漏
 *             4. WeakMap 不可遍历（没有 size、keys、values、entries 方法），但深拷贝只需要 get/set/has
 * @returns 拷贝后的对象
 */
const deepClone = (obj: any, hash: WeakMap<any, any> = new WeakMap()) => {
  /**
   * null 和基本类型（number, string, boolean, undefined, symbol, bigint, function）
   * 基本类型是不可变的，直接返回即可
   */
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  /**
   * Map 类型
   * Map 是键值对集合，需要遍历每个键值对并递归克隆
   * 注意：Map 的键也可能是对象，所以键和值都需要深拷贝
   */
  if (obj instanceof Map) {
    const cloneMap = new Map()
    hash.set(obj, cloneMap)
    obj.forEach((value, key) => {
      cloneMap.set(deepClone(key, hash), deepClone(value, hash))
    })

    return cloneMap
  }

  /**
   * Set 类型
   * Set 是值的集合，需要遍历每个值并递归克隆
   */
  if (obj instanceof Set) {
    const cloneSet = new Set()
    hash.set(obj, cloneSet)
    obj.forEach((value) => {
      cloneSet.add(deepClone(value, hash))
    })

    return cloneSet
  }

  /**
   * Date 类型
   * Date 是日期对象，通过 new Date(原Date) 创建新实例
   * 新实例与原实例时间相同但引用不同
   */
  if (obj.constructor === Date) {
    return new Date(obj)
  }

  /**
   * RegExp 类型
   * 正则表达式对象，通过 new RegExp(原RegExp) 创建新实例
   * 会保留 source 和 flags
   */
  if (obj.constructor === RegExp) {
    return new RegExp(obj)
  }

  /**
   * ArrayBuffer 类型
   * 二进制数据缓冲区，用于存储固定长度的原始二进制数据
   * 使用 slice(0) 复制整个缓冲区，返回新的 ArrayBuffer
   */
  if (obj instanceof ArrayBuffer) {
    return obj.slice(0)
  }

  /**
   * TypedArray 类型（Uint8Array, Int32Array, Float64Array 等）
   * 类型化数组是 ArrayBuffer 的视图，用于读写二进制数据
   * 通过构造函数传入原数组创建新实例，会自动复制底层数据
   * 注意：需要排除 DataView，因为它也是 ArrayBuffer.isView
   */
  if (ArrayBuffer.isView(obj) && !(obj instanceof DataView)) {
    const TypedArrayConstructor = obj.constructor as any
    return new TypedArrayConstructor(obj)
  }

  /**
   * DataView 类型
   * DataView 是 ArrayBuffer 的另一种视图，提供更灵活的读写方式
   * 需要先克隆底层的 ArrayBuffer，再基于新 buffer 创建 DataView
   * 同时保留 byteOffset 和 byteLength
   */
  if (obj instanceof DataView) {
    const clonedBuffer = obj.buffer.slice(0)
    return new DataView(clonedBuffer, obj.byteOffset, obj.byteLength)
  }

  /**
   * Error 类型（Error, TypeError, RangeError 等）
   * 错误对象包含 message、name、stack 等属性
   * 通过相同的构造函数创建新实例，并复制 stack 属性
   */
  if (obj instanceof Error) {
    const cloneError = new (obj.constructor as ErrorConstructor)(obj.message)
    cloneError.stack = obj.stack
    return cloneError
  }

  /**
   * 循环引用处理
   * 如果对象已经被克隆过，直接返回之前的克隆结果
   * 避免无限递归
   */
  if (hash.has(obj)) {
    return hash.get(obj)
  }

  /**
   * 普通对象和数组
   * 数组使用 [] 创建，保持数组类型
   * 对象使用 Object.create 保留原型链
   * 使用 Object.getOwnPropertyDescriptors 保留属性描述符（包括 getter/setter）
   */
  const cloneObj = Array.isArray(obj)
    ? []
    : Object.create(
        Object.getPrototypeOf(obj),
        Object.getOwnPropertyDescriptors(obj)
      )

  // 设置好 obj 对应的克隆引用值，用于处理循环引用
  hash.set(obj, cloneObj)

  /**
   * 遍历所有自有属性（包括 Symbol 属性）
   * Reflect.ownKeys 返回所有自有属性键，包括字符串键和 Symbol 键，能同时遍历对象和数组
   * 对于对象类型的值，递归调用 deepClone
   */
  for (const key of Reflect.ownKeys(obj)) {
    const value =
      typeof obj[key] === 'object' && obj[key]
        ? deepClone(obj[key], hash)
        : obj[key]

    cloneObj[key] = value
  }

  return cloneObj
}

export default deepClone
