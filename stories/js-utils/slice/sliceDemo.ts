import { action } from 'storybook/actions'
import slice from '../../../packages/js-utils/src/slice'

const sliceDemo = () => {
  const arr = [1, 2, 3, 4, 5]

  // 默认返回全部副本 (lodash: slice(arr) deepEqual arr, !== arr)
  const copy = slice(arr)
  action('slice - 默认全部')({ result: copy, isNewRef: copy !== arr })

  // 正数 start (lodash: slice(arr, 1) => [2,3])
  action('slice - start=1')(slice(arr, 1))

  // start + end (lodash: slice(arr, 1, 3) => [2,3])
  action('slice - start=1,end=3')(slice(arr, 1, 3))

  // 负数 start (lodash: slice([1,2,3], -1) => [3])
  action('slice - 负数start')(slice(arr, -2))

  // 负数 end (lodash: slice([1,2,3], 0, -1) => [1,2])
  action('slice - 负数end')(slice(arr, 0, -1))

  // start >= end 返回空数组 (lodash: slice(arr, 2, 2) => [])
  action('slice - start>=end')(slice(arr, 3, 2))

  // start >= length 返回空数组
  action('slice - start超出范围')(slice(arr, 10))

  // 原数组不变
  action('slice - 原数组不变')(arr)
}

export default sliceDemo