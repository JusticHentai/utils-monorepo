import { action } from 'storybook/actions'
import partition from '../../../packages/js-utils/src/partition'

const partitionDemo = () => {
  // 基本分组 (lodash: partition([1,0,1], identity) => [[1,1],[0]])
  const numbers = [1, 2, 3, 4, 5, 6]
  const [evens, odds] = partition(numbers, (n) => n % 2 === 0)
  action('partition - 奇偶分组')({ evens, odds })

  // 空数组 (lodash: partition([], identity) => [[], []])
  action('partition - 空数组')(partition([], (x) => !!x))

  // 全部满足条件
  action('partition - 全部为true')(partition([1, 2, 3], () => true))

  // 全部不满足条件
  action('partition - 全部为false')(partition([1, 2, 3], () => false))

  // 对象数组分组
  const users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true },
  ]
  const [active, inactive] = partition(users, (u) => u.active)
  action('partition - 活跃/非活跃用户')({ active, inactive })
}

export default partitionDemo