import { action } from 'storybook/actions'
import pullAllWith from '../../../packages/js-utils/src/pullAllWith'

const edgeCaseDemo = () => {
  const a = [{ x: 1 }, { x: 2 }, { x: 3 }]
  pullAllWith(a, [{ x: 1 }], (a, b) => a.x === b.x)

  action('pullAllWith - 边界情况')({
    '自定义比较移除': a,
  })
}

export default edgeCaseDemo
