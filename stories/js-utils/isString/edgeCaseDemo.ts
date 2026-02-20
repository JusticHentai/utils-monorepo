import { action } from 'storybook/actions'
import isString from '../../../packages/js-utils/src/isString'

const edgeCaseDemo = () => {
  const results = {
    '"abc"': isString('abc'),
    '""空字符串': isString(''),
    'String("abc")': isString(String('abc')),
    '1': isString(1),
    'null': isString(null),
  }

  action('isString - 边界情况')(results)
}

export default edgeCaseDemo
