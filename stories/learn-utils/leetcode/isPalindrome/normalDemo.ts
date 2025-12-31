import isPalindrome from '@jqxon/learn-utils/leetcode/isPalindrome'

export default () => {
  // 创建回文链表: 1 -> 2 -> 2 -> 1
  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next: { val: 1, next: null },
      },
    },
  }

  const result = isPalindrome(head as any)

  console.log('链表: 1 -> 2 -> 2 -> 1')
  console.log('是否为回文链表:', result)

  return result
}
