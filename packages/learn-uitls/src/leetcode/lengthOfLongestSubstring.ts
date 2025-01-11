/**
 * 无重复字符的最长子串
 */
export default function lengthOfLongestSubstring(s: string): number {
  const hashSet = new Set()

  let right = 0,
    res = 0

  for (let i = 0, length = s.length; i < length; i++) {
    // 每次大循环 左指针向右移
    if (i !== 0) {
      hashSet.delete(s.charAt(i - 1))
    }

    // 循环到右指针到尽头 并且合集内还没有重复
    while (right < length && !hashSet.has(s.charAt(right))) {
      hashSet.add(s.charAt(right))

      right++
    }

    res = Math.max(res, right - i)
  }

  return res
}
