import { action } from 'storybook/actions'
import minBy from '../../../packages/js-utils/src/minBy'

const minByDemo = () => {
  const objects = [{ n: 1 }, { n: 2 }]
  action('minBy 演示')({
    '按 n 取最小': minBy(objects, (o) => o.n),
  })
}

export default minByDemo
