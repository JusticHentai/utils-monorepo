import { action } from 'storybook/actions'
import { dropRight } from '../../../packages/js-utils/src/drop'

const dropRightDemo = () => {
  const array = [1, 2, 3]

  action('dropRight - 移除末尾2个')({ 输入: array, n: 2, 结果: dropRight(array, 2) })
  action('dropRight - 默认移除末尾1个')({ 结果: dropRight(array) })

  // n < 1 返回全部
  action('dropRight - n < 1 返回全部')({
    'n=0': dropRight(array, 0),
    'n=-1': dropRight(array, -1),
  })

  // n >= length 返回空数组
  action('dropRight - n >= length 返回空数组')({
    'n=3': dropRight(array, 3),
    'n=4': dropRight(array, 4),
  })
}

export default dropRightDemo
