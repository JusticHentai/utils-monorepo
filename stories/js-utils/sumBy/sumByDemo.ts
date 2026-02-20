import { action } from 'storybook/actions'
import sumBy from '../../../packages/js-utils/src/sumBy'

const sumByDemo = () => {
  const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
  action('sumBy 演示')({
    '按 n 求和': sumBy(objects, (o) => o.n),
  })
}

export default sumByDemo
