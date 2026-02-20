import { action } from 'storybook/actions'
import before from '../../../packages/js-utils/src/before'

const edgeCaseDemo = () => {
  let count = 0
  const limited = before(3, () => ++count)
  limited(); limited(); limited(); limited()
  action('before - 边界情况')({
    '限制3次调4次': count,
    说明: '只有前2次执行',
  })
}

export default edgeCaseDemo
