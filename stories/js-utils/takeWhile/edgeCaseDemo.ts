import { action } from 'storybook/actions'
import takeWhile from '../../../packages/js-utils/src/takeWhile'

const edgeCaseDemo = () => {
  action('takeWhile - 边界情况')({
    '条件取': takeWhile([1,2,3,4], n => n < 3), '空数组': takeWhile([], n => true), '全不满足': takeWhile([5,6], n => n < 3)
  })
}

export default edgeCaseDemo
