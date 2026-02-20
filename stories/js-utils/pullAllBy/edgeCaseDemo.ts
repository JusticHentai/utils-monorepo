import { action } from 'storybook/actions'
import pullAllBy from '../../../packages/js-utils/src/pullAllBy'

const edgeCaseDemo = () => {
  const a = [{ x: 1 }, { x: 2 }, { x: 3 }]
  pullAllBy(a, [{ x: 1 }], (o) => o.x)

  action('pullAllBy - 边界情况')({
    '按属性移除': a,
  })
}

export default edgeCaseDemo
