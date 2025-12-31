// findDisappearedNumbers 未导出，这里展示算法思路
export default () => {
  const nums = [4, 3, 2, 7, 8, 2, 3, 1]

  // 原地标记法
  const n = nums.length
  for (const num of nums) {
    const x = (num - 1) % n
    nums[x] += n
  }

  const res = []
  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      res.push(i + 1)
    }
  }

  console.log('输入数组:', [4, 3, 2, 7, 8, 2, 3, 1])
  console.log('消失的数字:', res)

  return res
}
