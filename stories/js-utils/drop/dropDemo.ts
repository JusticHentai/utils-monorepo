import { action } from 'storybook/actions'
import drop from '../../../packages/js-utils/src/drop'

const dropDemo = () => {
  const array = [1, 2, 3]

  // 基础：移除前 N 个
  action('drop - 移除前2个')({ 输入: array, n: 2, 结果: drop(array, 2) })

  // 默认移除1个
  action('drop - 默认移除1个')({ 输入: array, 结果: drop(array) })

  // n < 1 返回全部（0, 负数）
  action('drop - n < 1 返回全部')({
    'n=0': drop(array, 0),
    'n=-1': drop(array, -1),
    'n=-Infinity': drop(array, -Infinity),
  })

  // n >= length 返回空数组
  action('drop - n >= length 返回空数组')({
    'n=3': drop(array, 3),
    'n=4': drop(array, 4),
    'n=Infinity': drop(array, Infinity),
  })

  // 浮点数被截断
  action('drop - 浮点数 n')({ 'drop([1,2,3], 1.6)': drop(array, 1.6) })
}

export default dropDemo
