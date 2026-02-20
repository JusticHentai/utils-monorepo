import { action } from 'storybook/actions'
import take from '../../../packages/js-utils/src/take'
import takeRight from '../../../packages/js-utils/src/takeRight'

const takeDemo = () => {
  const arr = [1, 2, 3]

  // 基础：取前2个
  action('take - 前2个')(take(arr, 2))

  // 默认取1个
  action('take - 默认取1个')(take(arr))

  // n < 1 返回空数组
  action('take - n=0 返回空数组')(take(arr, 0))
  action('take - n=-1 返回空数组')(take(arr, -1))

  // n >= length 返回全部
  action('take - n=3 返回全部')(take(arr, 3))
  action('take - n=100 返回全部')(take(arr, 100))

  // takeRight
  action('takeRight - 后2个')(takeRight(arr, 2))
  action('takeRight - 默认取最后1个')(takeRight(arr))
  action('takeRight - n=0 返回空数组')(takeRight(arr, 0))
  action('takeRight - n >= length 返回全部')(takeRight(arr, 100))
}

export default takeDemo
