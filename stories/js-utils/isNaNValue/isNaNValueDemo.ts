import { action } from 'storybook/actions'
import isNaNValue from '../../../packages/js-utils/src/isNaNValue'

const isNaNValueDemo = () => {
  action('isNaNValue 演示')({
    'NaN': isNaNValue(NaN),
    'undefined': isNaNValue(undefined),
    '0': isNaNValue(0),
    'null': isNaNValue(null),
    '"NaN"': isNaNValue('NaN'),
  })
}

export default isNaNValueDemo
