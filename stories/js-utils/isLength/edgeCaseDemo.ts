import { action } from 'storybook/actions'
import isLength from '../../../packages/js-utils/src/isLength'

const edgeCaseDemo = () => {
  const results = {
    '3': isLength(3),
    '0': isLength(0),
    '-1': isLength(-1),
    '1.5': isLength(1.5),
    'Infinity': isLength(Infinity),
    'MAX_SAFE_INTEGER': isLength(Number.MAX_SAFE_INTEGER),
  }

  action('isLength - 边界情况')(results)
}

export default edgeCaseDemo
