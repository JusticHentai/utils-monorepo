import { action } from 'storybook/actions'
import unionWith from '../../../packages/js-utils/src/unionWith'

const unionWithDemo = () => {
  const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }]
  const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }]
  action('unionWith 演示')({
    '自定义比较合并': unionWith(objects, others, (a, b) => a.x === b.x && a.y === b.y),
  })
}

export default unionWithDemo
