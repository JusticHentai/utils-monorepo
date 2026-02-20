import { action } from 'storybook/actions'
import maxBy from '../../../packages/js-utils/src/maxBy'

const edgeCaseDemo = () => {
  const items = [{ n: 1 }, { n: 2 }]
  action('maxBy - 边界情况')({
    '对象数组': maxBy(items, (o) => o.n),
    '空数组': maxBy([], (o) => o),
    '单元素': maxBy([{ n: 5 }], (o) => o.n),
  })
}

export default edgeCaseDemo
