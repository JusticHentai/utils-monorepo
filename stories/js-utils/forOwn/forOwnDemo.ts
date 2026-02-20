import { action } from 'storybook/actions'
import forOwn from '../../../packages/js-utils/src/forOwn'

const forOwnDemo = () => {
  const result = []
  forOwn({ a: 1, b: 2, c: 3 }, (value, key) => { result.push(key + ': ' + value) })
  action('forOwn 演示')({ '遍历自有属性': result })
}

export default forOwnDemo
