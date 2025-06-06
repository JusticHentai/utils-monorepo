const deepClone = (obj: any, hash: WeakMap<any, any> = new WeakMap()) => {
  // 如果是 date 类型 new 一个 date
  if (obj.constructor === Date) {
    return new Date(obj)
  }

  // 如果是 RegExp 类型 就 new 一个 RegExp
  if (obj.constructor === RegExp) {
    return new RegExp(obj)
  }

  // 循环引用 直接返回自己就行
  if (hash.has(obj)) {
    return hash.get(obj)
  }

  // 浅拷贝 obj
  const cloneObj = Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  )

  // 设置好 obj 对应的浅拷贝
  hash.set(obj, cloneObj)

  // 修改浅拷贝的内容为深拷贝
  // Reflect 把对象的 key 拿出来组成数组 包含数组
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] =
      typeof obj[key] === 'object' && obj[key]
        ? deepClone(obj[key], hash)
        : obj[key]
  }
}

export default deepClone
