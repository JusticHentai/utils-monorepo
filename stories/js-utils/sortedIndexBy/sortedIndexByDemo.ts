import { action } from 'storybook/actions'
import sortedIndexBy from '../../../packages/js-utils/src/sortedIndexBy'

const sortedIndexByDemo = () => {
  const objects = [{ x: 4 }, { x: 5 }]
  action('sortedIndexBy 演示')({
    '{ x: 4 } 应该插入的索引': sortedIndexBy(objects, { x: 4 }, (o) => o.x),
    '{ x: 4.5 } 应该插入的索引': sortedIndexBy(objects, { x: 4.5 }, (o) => o.x),
  })
}

export default sortedIndexByDemo
