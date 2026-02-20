import { action } from 'storybook/actions'
import pullAllWith from '../../../packages/js-utils/src/pullAllWith'

const pullAllWithDemo = () => {
  const array = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }]
  pullAllWith(array, [{ x: 1, y: 2 }, { x: 5, y: 6 }], (a, b) => a.x === b.x && a.y === b.y)
  action('pullAllWith 演示')({ '自定义比较移除后': array })
}

export default pullAllWithDemo
