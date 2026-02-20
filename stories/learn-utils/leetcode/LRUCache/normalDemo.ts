import LRUCache from '../../../../packages/learn-utils/src/leetcode/LRUCache'

const normalDemo = () => {
  const cache = new LRUCache(2) // 容量为2

  cache.put(1, 1)
  cache.put(2, 2)
  const get1 = cache.get(1) // 返回 1

  cache.put(3, 3) // 该操作会使得密钥 2 作废
  const get2 = cache.get(2) // 返回 -1 (未找到)

  cache.put(4, 4) // 该操作会使得密钥 1 作废
  const get1Again = cache.get(1) // 返回 -1 (未找到)
  const get3 = cache.get(3) // 返回 3
  const get4 = cache.get(4) // 返回 4

  return {
    operations: [
      'put(1,1)',
      'put(2,2)',
      'get(1)',
      'put(3,3)',
      'get(2)',
      'put(4,4)',
      'get(1)',
      'get(3)',
      'get(4)',
    ],
    results: [null, null, get1, null, get2, null, get1Again, get3, get4],
    expected: [null, null, 1, null, -1, null, -1, 3, 4],
  }
}

export default normalDemo
