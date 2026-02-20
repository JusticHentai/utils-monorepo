import { action } from 'storybook/actions'
import isArguments from '../../../packages/js-utils/src/isArguments'

const edgeCaseDemo = () => {
  // eslint-disable-next-line prefer-rest-params
  const args = (function() { return arguments })()
  const results = {
    'arguments 对象': isArguments(args),
    '普通数组': isArguments([1, 2]),
    'null': isArguments(null),
    'undefined': isArguments(undefined),
  }

  action('isArguments - 边界情况')(results)
}

export default edgeCaseDemo
