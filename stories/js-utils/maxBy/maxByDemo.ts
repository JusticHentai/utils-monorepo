import { action } from 'storybook/actions'
import maxBy from '../../../packages/js-utils/src/maxBy'

const maxByDemo = () => {
  const objects = [{ n: 1 }, { n: 2 }]
  action('maxBy 演示')({
    '按 n 取最大': maxBy(objects, (o) => o.n),
  })
}

export default maxByDemo
