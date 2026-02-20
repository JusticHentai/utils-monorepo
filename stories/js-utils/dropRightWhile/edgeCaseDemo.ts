import { action } from 'storybook/actions'
import dropRightWhile from '../../../packages/js-utils/src/dropRightWhile'

const edgeCaseDemo = () => {
  action('dropRightWhile - 边界情况')({
    '条件丢弃': dropRightWhile([1,2,3,4], n => n > 2), '空数组': dropRightWhile([], n => n > 2), '全部满足': dropRightWhile([1,2], n => n > 0)
  })
}

export default edgeCaseDemo
