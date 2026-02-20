import { action } from 'storybook/actions'
import sortedLastIndexBy from '../../../packages/js-utils/src/sortedLastIndexBy'

const sortedLastIndexByDemo = () => {
  const objects = [{ x: 4 }, { x: 5 }]
  action('sortedLastIndexBy 演示')({
    '{ x: 4 } 的最后索引': sortedLastIndexBy(objects, { x: 4 }, (o) => o.x),
  })
}

export default sortedLastIndexByDemo
