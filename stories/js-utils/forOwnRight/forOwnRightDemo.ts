import { action } from 'storybook/actions'
import forOwnRight from '../../../packages/js-utils/src/forOwnRight'

const forOwnRightDemo = () => {
  const result = []
  forOwnRight({ a: 1, b: 2, c: 3 }, (value, key) => { result.push(key + ': ' + value) })
  action('forOwnRight 演示')({ '从右遍历自有属性': result })
}

export default forOwnRightDemo
