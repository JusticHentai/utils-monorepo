import { action } from 'storybook/actions'
import meanBy from '../../../packages/js-utils/src/meanBy'

const edgeCaseDemo = () => {
  const items = [{ n: 4 }, { n: 2 }, { n: 8 }]
  action('meanBy - 边界情况')({
    '对象数组': meanBy(items, (o) => o.n),
    '空数组': meanBy([], (o) => o),
    '单元素': meanBy([{ n: 5 }], (o) => o.n),
  })
}

export default edgeCaseDemo
