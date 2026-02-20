import { action } from 'storybook/actions'
import differenceBy from '../../../packages/js-utils/src/differenceBy'

const differenceByDemo = () => {
  action('differenceBy 演示')({
    'Math.floor 差集': differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor),
    '对象按 x 属性差集': differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], (o) => o.x),
  })
}

export default differenceByDemo
