import { action } from 'storybook/actions'
import fromPairs from '../../../packages/js-utils/src/fromPairs'

const edgeCaseDemo = () => {
  action('fromPairs - 边界情况')({
    '正常': fromPairs([['a', 1], ['b', 2]]), '空数组': fromPairs([])
  })
}

export default edgeCaseDemo
