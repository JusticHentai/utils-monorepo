import { action } from 'storybook/actions'
import sortedUniq from '../../../packages/js-utils/src/sortedUniq'
import { sortedUniqBy } from '../../../packages/js-utils/src/sortedUniq'

const sortedUniqDemo = () => {
  // 基础：各种排序数组去重结果均为 [1, 2, 3]
  action('sortedUniq - 无重复')({
    输入: [1, 2, 3],
    结果: sortedUniq([1, 2, 3]),
  })

  action('sortedUniq - 首尾重复')({
    输入: [1, 1, 2, 2, 3],
    结果: sortedUniq([1, 1, 2, 2, 3]),
  })

  action('sortedUniq - 大量连续重复')({
    输入: [1, 2, 3, 3, 3, 3, 3],
    结果: sortedUniq([1, 2, 3, 3, 3, 3, 3]),
  })

  // sortedUniqBy：通过迭代器去重
  action('sortedUniqBy - Math.floor 取整去重')({
    输入: [1.1, 1.2, 2.3, 2.4],
    结果: sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor),
  })

  // 边界：空数组
  action('sortedUniq - 空数组')({
    输入: [],
    结果: sortedUniq([]),
  })

  // 边界：单元素
  action('sortedUniq - 单元素')({
    输入: [5],
    结果: sortedUniq([5]),
  })
}

export default sortedUniqDemo
