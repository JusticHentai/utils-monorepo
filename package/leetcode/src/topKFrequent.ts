export default function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map()

  nums.map((num: number) => {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  })

  if (map.size <= k) {
    return [...map.keys()]
  }

  return bucketSort(map, k)
}

const bucketSort = (map: Map<number, number>, k: number): number[] => {
  const arr: number[][] = [],
    res = []

  map.forEach((value: number, key: number) => {
    // 根据频率分配到不同桶里
    if (!arr[value]) {
      arr[value] = [key]
    } else {
      arr[value].push(key)
    }
  })

  // 倒序遍历获取 频率最大的 k 的个数
  for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i]) {
      res.push(...arr[i])
    }
  }

  return res
}
