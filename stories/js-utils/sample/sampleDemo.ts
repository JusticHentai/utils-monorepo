import { action } from 'storybook/actions'
import sample from '../../../packages/js-utils/src/sample'

const sampleDemo = () => {
  // 随机获取一个元素 (lodash: sample([1,2,3]) => random element)
  const arr = [1, 2, 3, 4, 5]
  action('sample - 随机一个')(sample(arr))
  action('sample - 再来一个')(sample(arr))

  // 字符串数组
  action('sample - 字符串数组')(sample(['apple', 'banana', 'cherry']))

  // 空数组返回 undefined (lodash: sample empty => undefined)
  action('sample - 空数组')(sample([]))

  // 结果一定在原数组中
  const r = sample(arr)
  action('sample - 结果在数组中')({ result: r, includes: arr.includes(r!) })
}

export default sampleDemo