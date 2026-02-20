import { action } from 'storybook/actions'
import minBy from '../../../packages/js-utils/src/minBy'

const edgeCaseDemo = () => {
  const items = [{ n: 1 }, { n: 2 }]
  action('minBy - 边界情况')({
    '对象数组': minBy(items, (o) => o.n),
    '空数组': minBy([], (o) => o),
    '单元素': minBy([{ n: 5 }], (o) => o.n),
  })
}

export default edgeCaseDemo
