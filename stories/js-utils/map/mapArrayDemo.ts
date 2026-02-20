import { action } from 'storybook/actions'
import map from '../../../packages/js-utils/src/map'

const mapArrayDemo = () => {
  // 基础: 数组映射
  action('map - 数组映射')({
    'map([1, 2], String)': map([1, 2], String),
    期望: ['1', '2'],
  })

  // 平方运算
  action('map - 平方')({
    'map([4, 8], n => n*n)': map([4, 8], (n) => n * n),
    期望: [16, 64],
  })

  // 提取属性
  const users = [{ name: 'Alice' }, { name: 'Bob' }]
  action('map - 提取属性')({
    输入: users,
    'map(users, u => u.name)': map(users, (u) => u.name),
  })

  // 空/falsey 输入返回空数组 (lodash 测试)
  action('map - 空输入')({
    'map(null, ...)': map(null as any, (x: any) => x),
    'map(undefined, ...)': map(undefined as any, (x: any) => x),
    说明: '所有 falsey 输入返回 []',
  })
}

export default mapArrayDemo