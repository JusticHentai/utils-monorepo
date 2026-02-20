import { action } from 'storybook/actions'
import intersectionWith from '../../../packages/js-utils/src/intersectionWith'

const intersectionWithDemo = () => {
  const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }]
  const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }]
  action('intersectionWith 演示')({
    '自定义比较交集': intersectionWith(objects, others, (a, b) => a.x === b.x && a.y === b.y),
  })
}

export default intersectionWithDemo
