import { action } from 'storybook/actions'
import takeRightWhile from '../../../packages/js-utils/src/takeRightWhile'

const edgeCaseDemo = () => {
  action('takeRightWhile - 边界情况')({
    '条件取': takeRightWhile([1,2,3,4], n => n > 2), '空数组': takeRightWhile([], n => true), '全不满足': takeRightWhile([1,2], n => n > 5)
  })
}

export default edgeCaseDemo
