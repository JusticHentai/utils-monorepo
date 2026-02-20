import { action } from 'storybook/actions'
import toPairsIn from '../../../packages/js-utils/src/toPairsIn'

const toPairsInDemo = () => {
  action('toPairsIn 演示')({
    'test': toPairsIn('test'),
    'null': toPairsIn(null),
  })
}

export default toPairsInDemo
