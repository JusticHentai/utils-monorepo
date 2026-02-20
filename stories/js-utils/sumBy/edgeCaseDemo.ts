import { action } from 'storybook/actions'
import sumBy from '../../../packages/js-utils/src/sumBy'

const edgeCaseDemo = () => {
  const items = [{ n: 4 }, { n: 2 }, { n: 8 }]
  action('sumBy - 边界情况')({
    '对象数组': sumBy(items, (o) => o.n),
    '空数组': sumBy([], (o) => o),
  })
}

export default edgeCaseDemo
