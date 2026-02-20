import { action } from 'storybook/actions'
import reject from '../../../packages/js-utils/src/reject'

const edgeCaseDemo = () => {
  action('reject - 边界情况')({
    '过滤偶数': reject([1,2,3,4], n => n % 2 === 0), '空数组': reject([], () => true), '全部拒绝': reject([1,2], () => true)
  })
}

export default edgeCaseDemo
