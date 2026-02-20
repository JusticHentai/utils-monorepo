import { action } from 'storybook/actions'
import overArgs from '../../../packages/js-utils/src/overArgs'

const edgeCaseDemo = () => {
  const fn = overArgs((x, y) => [x, y], [n => n * 2, n => n * n])
  action('overArgs - 边界情况')({
    '转换参数': fn(5, 3),
  })
}

export default edgeCaseDemo
