import { action } from 'storybook/actions'
import isNull from '../../../packages/js-utils/src/isNull'

const isNullDemo = () => {
  action('isNull 演示')({
    'null': isNull(null),
    'undefined': isNull(undefined),
    '0': isNull(0),
    '""': isNull(''),
    'false': isNull(false),
  })
}

export default isNullDemo
