import flatten from '../../../../packages/learn-utils/src/leetcode/flatten'

export default () => {
  // 构建二叉树:
  //     1
  //    / \
  //   2   5
  //  / \   \
  // 3   4   6
  const root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 5,
      left: null,
      right: { val: 6, left: null, right: null },
    },
  }

  flatten(root as any)

  // 展平后: 1 -> 2 -> 3 -> 4 -> 5 -> 6
  const result: number[] = []
  let current: any = root
  while (current) {
    result.push(current.val)
    current = current.right
  }

  console.log('展平后的链表:', result)

  return result
}
