import { action } from 'storybook/actions'
import findLast from '../../../packages/js-utils/src/findLast'

const edgeCaseDemo = () => {
  action('findLast - 边界情况')({
    '找到': findLast([1,2,3,4], n => n % 2 === 0), '未找到': findLast([1,3,5], n => n % 2 === 0), '空数组': findLast([], n => true)
  })
}

export default edgeCaseDemo
