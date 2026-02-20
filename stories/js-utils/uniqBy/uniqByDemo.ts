import { action } from 'storybook/actions'
import uniqBy from '../../../packages/js-utils/src/uniqBy'

const uniqByDemo = () => {
  action('uniqBy 演示')({
    'Math.floor 去重': uniqBy([2.1, 1.2, 2.3], Math.floor),
    '对象按 x 去重': uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], (o) => o.x),
  })
}

export default uniqByDemo
