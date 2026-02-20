import { action } from 'storybook/actions'
import isLength from '../../../packages/js-utils/src/isLength'

const isLengthDemo = () => {
  action('isLength 演示')({
    '3': isLength(3),
    '0': isLength(0),
    '-1': isLength(-1),
    'Number.MAX_SAFE_INTEGER': isLength(Number.MAX_SAFE_INTEGER),
    'Infinity': isLength(Infinity),
  })
}

export default isLengthDemo
