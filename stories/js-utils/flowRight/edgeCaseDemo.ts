import { action } from 'storybook/actions'
import flowRight from '../../../packages/js-utils/src/flowRight'

const edgeCaseDemo = () => {
  const add10 = n => n + 10
  const mul2 = n => n * 2
  const composed = flowRight(add10, mul2)
  action('flowRight - 边界情况')({
    '组合 add10(mul2(5))': composed(5),
    说明: '先 mul2 再 add10',
  })
}

export default edgeCaseDemo
