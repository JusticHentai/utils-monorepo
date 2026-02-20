import { action } from 'storybook/actions'
import rearg from '../../../packages/js-utils/src/rearg'

const edgeCaseDemo = () => {
  const rearged = rearg((a, b, c) => [a, b, c], [2, 0, 1])
  action('rearg - 边界情况')({
    '重排参数': rearged('b', 'c', 'a'),
  })
}

export default edgeCaseDemo
