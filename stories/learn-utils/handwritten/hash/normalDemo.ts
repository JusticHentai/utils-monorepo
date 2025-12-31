import { hash1, hash2 } from '../../../../packages/learn-utils/src/handwritten/hash'

const normalDemo = () => {
  // 测试求最大差值
  const nums = [3, 1, 9, 5, 2, 8]
  const maxDiff = hash1(nums)

  // 测试对象数组去重
  const objects = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 1, name: 'a' },
    { id: 3, name: 'c' },
    { id: 2, name: 'b' },
  ]
  const unique = hash2(objects)

  return {
    nums,
    maxDiff, // 9 - 1 = 8
    objects: '包含重复对象的数组',
    unique, // 去重后的数组
  }
}

export default normalDemo
