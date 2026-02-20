import { action } from 'storybook/actions'
import filter from '../../../packages/js-utils/src/filter'

const filterDemo = () => {
  // 基础：返回偶数元素
  action('filter - 返回偶数')(
    filter([1, 2, 3], (n) => n % 2 === 0),
  )

  // 对象数组过滤
  const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true },
  ]
  action('filter - 对象数组过滤活跃用户')(
    filter(users, (u) => u.active),
  )

  // 空数组返回空数组
  action('filter - 空数组')({
    结果: filter([], () => true),
  })
}

export default filterDemo
