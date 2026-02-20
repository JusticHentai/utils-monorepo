import { action } from 'storybook/actions'
import tail from '../../../packages/js-utils/src/tail'

const edgeCaseDemo = () => {
  action('tail - 边界情况')({
    '正常': tail([1, 2, 3]), '单元素': tail([1]), '空数组': tail([])
  })
}

export default edgeCaseDemo
