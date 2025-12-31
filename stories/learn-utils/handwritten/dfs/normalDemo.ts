import { dfs1, dfs2 } from '../../../../packages/learn-utils/src/handwritten/dfs'

const normalDemo = () => {
  // 测试计算数组深度
  const nestedArray = [1, [2, [3, [4, [5]]]]]
  const depth = dfs1(nestedArray)

  // 测试组合求和
  const nums = [1, 2, 3, 4, 5]
  const combinations = dfs2(nums, 5)

  return {
    nestedArray: '嵌套数组 [1, [2, [3, [4, [5]]]]]',
    depth, // 5
    nums: '数组 [1, 2, 3, 4, 5]',
    target: 5,
    combinations, // 和为5的组合
  }
}

export default normalDemo
