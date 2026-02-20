import { action } from 'storybook/actions'
import uniqWith from '../../../packages/js-utils/src/uniqWith'

const uniqWithDemo = () => {
  const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 2 }]
  action('uniqWith 演示')({
    '自定义比较去重': uniqWith(objects, (a, b) => a.x === b.x && a.y === b.y),
  })
}

export default uniqWithDemo
