export default class LRUCache {
  capacity: number
  map: Map<number, number> = new Map()

  constructor(capacity: number) {
    // 利用迭代器实现
    this.map = new Map()
    // 设置缓存最大个数
    this.capacity = capacity
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const value = this.map.get(key) as number

      // 重新 set，相当于更新到 map 最后
      this.map.delete(key)
      this.map.set(key, value)
      return value
    }

    return -1
  }

  put(key: number, value: number): void {
    // 如果有，就删了再赋值
    if (this.map.has(key)) {
      this.map.delete(key)
    }

    this.map.set(key, value)

    // 判断是不是容量超了，淘汰机制
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value)
    }
  }
}
