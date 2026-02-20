import { action } from 'storybook/actions'
import findLastIndex from '../../../packages/js-utils/src/findLastIndex'

const edgeCaseDemo = () => {
  action('findLastIndex - 边界情况')({
    '找到': findLastIndex([1,2,3,4], n => n % 2 === 0), '未找到': findLastIndex([1,3,5], n => n % 2 === 0), '空数组': findLastIndex([], n => true)
  })
}

export default edgeCaseDemo
