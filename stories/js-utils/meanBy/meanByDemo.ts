import { action } from 'storybook/actions'
import meanBy from '../../../packages/js-utils/src/meanBy'

const meanByDemo = () => {
  const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
  action('meanBy 演示')({
    '按 n 求平均': meanBy(objects, (o) => o.n),
  })
}

export default meanByDemo
