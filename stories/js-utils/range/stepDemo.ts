import { action } from 'storybook/actions'
import range from '../../../packages/js-utils/src/range'

const stepDemo = () => {
  action('range(0, 20, 5)')({
    结果: range(0, 20, 5),
    说明: '步长为 5',
  })

  action('range(0, -4, -1)')({
    结果: range(0, -4, -1),
    说明: '负步长',
  })
}

export default stepDemo
