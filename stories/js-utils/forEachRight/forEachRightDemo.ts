import { action } from 'storybook/actions'
import forEachRight from '../../../packages/js-utils/src/forEachRight'

const forEachRightDemo = () => {
  const result = []
  forEachRight([1, 2, 3], (value) => { result.push(value) })
  action('forEachRight 演示')({ '从右到左遍历': result })
}

export default forEachRightDemo
