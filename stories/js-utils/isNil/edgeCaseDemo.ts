import { action } from 'storybook/actions'
import isNil from '../../../packages/js-utils/src/isNil'

const edgeCaseDemo = () => {
  const results = {
    'null': isNil(null),
    'undefined': isNil(undefined),
    '0': isNil(0),
    '空字符串': isNil(''),
    'false': isNil(false),
    'NaN': isNil(NaN),
  }

  action('isNil - 边界情况')(results)
}

export default edgeCaseDemo
