import { action } from 'storybook/actions'
import unary from '../../../packages/js-utils/src/unary'

const edgeCaseDemo = () => {
  const nums = ['6', '8', '10'].map(unary(parseInt))
  action('unary - 边界情况')({
    '限制参数': nums,
    说明: 'parseInt 只接收一个参数，避免 radix 影响',
  })
}

export default edgeCaseDemo
