import { action } from 'storybook/actions'
import before from '../../../packages/js-utils/src/before'

const beforeDemo = () => {
  let count = 0
  const limited = before(3, () => ++count)
  limited(); limited(); limited(); limited()
  action('before 演示')({
    '限制 3 次调用，实际调用 4 次': count,
    说明: '只有前 2 次实际执行了函数',
  })
}

export default beforeDemo
