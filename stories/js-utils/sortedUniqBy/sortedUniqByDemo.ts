import { action } from 'storybook/actions'
import sortedUniqBy from '../../../packages/js-utils/src/sortedUniqBy'

const sortedUniqByDemo = () => {
  action('sortedUniqBy 演示')({
    'Math.floor 去重 [1.1, 1.2, 2.3, 2.4]': sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor),
  })
}

export default sortedUniqByDemo
