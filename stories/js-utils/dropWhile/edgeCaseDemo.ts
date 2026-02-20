import { action } from 'storybook/actions'
import dropWhile from '../../../packages/js-utils/src/dropWhile'

const edgeCaseDemo = () => {
  action('dropWhile - 边界情况')({
    '条件丢弃': dropWhile([1,2,3,4], n => n < 3), '空数组': dropWhile([], n => n < 3), '全部满足': dropWhile([1,2], n => n < 10)
  })
}

export default edgeCaseDemo
