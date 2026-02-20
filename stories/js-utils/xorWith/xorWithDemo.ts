import { action } from 'storybook/actions'
import xorWith from '../../../packages/js-utils/src/xorWith'

const xorWithDemo = () => {
  const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }]
  const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }]
  action('xorWith 演示')({
    '自定义比较对称差集': xorWith([objects, others], (a, b) => a.x === b.x && a.y === b.y),
  })
}

export default xorWithDemo
