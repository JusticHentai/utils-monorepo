import { action } from 'storybook/actions'
import { rangeRight } from '../../../packages/js-utils/src/range'

const rightDemo = () => {
  action('rangeRight(4)')({
    结果: rangeRight(4),
    说明: '降序生成数组',
  })

  action('rangeRight(1, 5)')({
    结果: rangeRight(1, 5),
    说明: '从 4 到 1',
  })
}

export default rightDemo
