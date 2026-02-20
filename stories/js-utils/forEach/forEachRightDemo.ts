import { action } from 'storybook/actions'
import forEachRight from '../../../packages/js-utils/src/forEachRight'

const forEachRightDemo = () => {
  const result: number[] = []
  forEachRight([1, 2, 3], (n) => result.push(n))
  action('forEachRight - 从右遍历')(result)
}

export default forEachRightDemo
