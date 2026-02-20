import { action } from 'storybook/actions'
import differenceWith from '../../../packages/js-utils/src/differenceWith'

const differenceWithDemo = () => {
  const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }]
  action('differenceWith 演示')({
    '自定义比较': differenceWith(objects, [{ x: 1, y: 2 }], (a, b) => a.x === b.x && a.y === b.y),
  })
}

export default differenceWithDemo
