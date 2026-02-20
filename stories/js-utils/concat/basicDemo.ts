import { action } from 'storybook/actions'
import concat from '../../../packages/js-utils/src/concat'

const basicDemo = () => {
  // 基础连接
  const array = [1]
  const result = concat(array, 2, [3], [[4]])

  action('concat - 基础连接')({
    原数组: array,
    连接后: result,
    原数组不变: array,
    说明: '浅展开一层数组，[[4]] 保持为 [4]',
  })

  // 不传参只做浅克隆
  const arr = [1, 2, 3]
  const cloned = concat(arr)
  action('concat - 无参数浅克隆')({
    原数组: arr,
    克隆: cloned,
    是否同一引用: arr === cloned,
    说明: '不传额外参数时，返回原数组的浅克隆',
  })
}

export default basicDemo
