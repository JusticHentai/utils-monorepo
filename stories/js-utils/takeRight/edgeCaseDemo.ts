import { action } from 'storybook/actions'
import takeRight from '../../../packages/js-utils/src/takeRight'

const edgeCaseDemo = () => {
  action('takeRight - 边界情况')({
    '取1个': takeRight([1,2,3]), '取2个': takeRight([1,2,3], 2), '空数组': takeRight([]), '超过长度': takeRight([1,2], 5)
  })
}

export default edgeCaseDemo
