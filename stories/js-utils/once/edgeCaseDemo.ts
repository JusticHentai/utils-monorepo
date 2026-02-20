import { action } from 'storybook/actions'
import once from '../../../packages/js-utils/src/once'

const edgeCaseDemo = () => {
  let count = 0
  const fn = once(() => ++count)
  fn(); fn(); fn()
  action('once - 边界情况')({
    '调用3次执行次数': count,
    说明: '只执行1次',
  })
}

export default edgeCaseDemo
