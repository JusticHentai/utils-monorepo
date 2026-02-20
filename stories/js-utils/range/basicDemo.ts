import { action } from 'storybook/actions'
import range from '../../../packages/js-utils/src/range'

const basicDemo = () => {
  action('range(4)')({
    结果: range(4),
    说明: '生成 0 到 3 的数组',
  })

  action('range(1, 5)')({
    结果: range(1, 5),
    说明: '生成 1 到 4 的数组',
  })

  action('range(-4)')({
    结果: range(-4),
    说明: '生成 0 到 -3 的数组',
  })
}

export default basicDemo
