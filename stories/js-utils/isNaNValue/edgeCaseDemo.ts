import { action } from 'storybook/actions'
import isNaNValue from '../../../packages/js-utils/src/isNaNValue'

const edgeCaseDemo = () => {
  const results = {
    'NaN': isNaNValue(NaN),
    'Number(NaN)': isNaNValue(Number('abc')),
    'undefined': isNaNValue(undefined),
    '0': isNaNValue(0),
    'null': isNaNValue(null),
  }

  action('isNaNValue - 边界情况')(results)
}

export default edgeCaseDemo
