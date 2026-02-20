import { action } from 'storybook/actions'
import pullAllBy from '../../../packages/js-utils/src/pullAllBy'

const pullAllByDemo = () => {
  const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]
  pullAllBy(array, [{ x: 1 }, { x: 3 }], (o) => o.x)
  action('pullAllBy 演示')({ '按 x 移除后': array })
}

export default pullAllByDemo
