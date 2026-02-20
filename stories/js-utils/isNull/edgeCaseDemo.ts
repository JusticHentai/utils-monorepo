import { action } from 'storybook/actions'
import isNull from '../../../packages/js-utils/src/isNull'

const edgeCaseDemo = () => {
  const results = {
    'null': isNull(null),
    'undefined': isNull(undefined),
    '0': isNull(0),
    '空字符串': isNull(''),
  }

  action('isNull - 边界情况')(results)
}

export default edgeCaseDemo
