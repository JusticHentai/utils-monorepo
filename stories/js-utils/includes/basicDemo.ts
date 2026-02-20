import { action } from 'storybook/actions'
import includes from '../../../packages/js-utils/src/includes'

const basicDemo = () => {
  // 数组查找
  action('includes - 数组查找')({
    '包含 3': includes([1, 2, 3, 4], 3),
    '不包含 5': includes([1, 2, 3, 4], 5),
  })

  // 字符串查找
  action('includes - 字符串查找')({
    '包含 "bc"': includes('abc', 'bc'),
    '不包含 "d"': includes('abc', 'd'),
  })

  // fromIndex 指定起始位置
  action('includes - fromIndex')({
    'includes([1,2,3], 1, 2)': includes([1, 2, 3], 1, 2),
    '浮点数 fromIndex 截断': includes([1, 2, 3, 4], 2, 1.2),
  })

  // 空集合返回 false
  action('includes - 空集合')({
    '空数组': includes([], 1),
    '空字符串': includes('', 'a'),
  })
}

export default basicDemo
