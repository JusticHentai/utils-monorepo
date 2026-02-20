import { action } from 'storybook/actions'
import toStringValue from '../../../packages/js-utils/src/toStringValue'

const toStringValueDemo = () => {
  action('toStringValue 演示')({
    'null': toStringValue(null),
    '-0': toStringValue(-0),
    '[1, 2, 3]': toStringValue([1, 2, 3]),
    'Symbol("a")': toStringValue(Symbol('a')),
    '123': toStringValue(123),
  })
}

export default toStringValueDemo
