import { action } from 'storybook/actions'
import toLength from '../../../packages/js-utils/src/toLength'

const edgeCaseDemo = () => {
  action('toLength - 边界情况')({
    '3.2': toLength(3.2), '-1': toLength(-1), 'Infinity': toLength(Infinity), '0': toLength(0)
  })
}

export default edgeCaseDemo
