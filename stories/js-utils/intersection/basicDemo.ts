import { action } from 'storybook/actions'
import intersection from '../../../packages/js-utils/src/intersection'

const basicDemo = () => {
  action('intersection')(intersection([2, 1], [2, 3]))
}

export default basicDemo
