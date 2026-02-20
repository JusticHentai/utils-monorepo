import { action } from 'storybook/actions'
import nth from '../../../packages/js-utils/src/nth'

const edgeCaseDemo = () => {
  action('nth - 边界情况')({
    '正数索引': nth([1, 2, 3], 1), '负数索引': nth([1, 2, 3], -1), '超出范围': nth([1, 2], 5), '空数组': nth([], 0)
  })
}

export default edgeCaseDemo
