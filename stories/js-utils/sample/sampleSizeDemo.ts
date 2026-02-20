import { action } from 'storybook/actions'
import { sampleSize } from '../../../packages/js-utils/src/sample'

const sampleSizeDemo = () => {
  const arr = [1, 2, 3, 4, 5]

  // 取指定数量 (lodash: sampleSize([1,2,3], 2) => [random 2 elements])
  action('sampleSize - 取2个')(sampleSize(arr, 2))

  // 取全部 (lodash: sampleSize(arr, arr.length).sort() => arr)
  action('sampleSize - 取全部排序')(sampleSize(arr, 5).sort((a, b) => a - b))

  // n超过长度 (lodash: returns all elements)
  action('sampleSize - 超过长度')(sampleSize(arr, 20))

  // n < 1 返回空数组 (lodash: sampleSize(arr, 0) => [])
  action('sampleSize - n=0')(sampleSize(arr, 0))
  action('sampleSize - n=-1')(sampleSize(arr, -1))

  // 空数组 (lodash: sampleSize([], 1) => [])
  action('sampleSize - 空数组')(sampleSize([], 1))
}

export default sampleSizeDemo