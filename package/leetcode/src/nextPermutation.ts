export default function nextPermutation(nums: number[]): void {
  let i = nums.length - 2

  // 寻找第一个 小于右邻居的数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  // 如果不是全部都要翻转的话 i 就大于 0 找比 num[i] 小的数来换
  if (i >= 0) {
    let j = nums.length - 1

    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }

    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  // 翻转 如果上面没进入 就是全部翻转 上面进入那就是翻转交换往后的
  // 这里双指针交换 快一点
  let l = i + 1
  let r = nums.length - 1

  while (l < r) {
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
}
