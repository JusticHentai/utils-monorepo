import { action } from 'storybook/actions'
import reverse from '../../../packages/js-utils/src/reverse'

const edgeCaseDemo = () => {
  action('reverse - 边界情况')({
    '正常': reverse([1, 2, 3]), '单元素': reverse([1]), '空数组': reverse([])
  })
}

export default edgeCaseDemo
