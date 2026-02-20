import { action } from 'storybook/actions'
import partition from '../../../packages/js-utils/src/partition'

const edgeCaseDemo = () => {
  action('partition - 边界情况')({
    '分组': partition([1, 2, 3, 4], n => n % 2 === 0), '空数组': partition([], () => true)
  })
}

export default edgeCaseDemo
