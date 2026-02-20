import { action } from 'storybook/actions'
import isString from '../../../packages/js-utils/src/isString'

const stringDemo = () => {
  action('isString - 字符串类型')({
    '"hello"': isString('hello'),
    "''": isString(''),
    'String("abc")': isString(String('abc')),
  })

  action('isString - 非字符串类型')({
    '123': isString(123),
    'null': isString(null),
    'undefined': isString(undefined),
    '[]': isString([]),
    '{}': isString({}),
    'true': isString(true),
  })
}

export default stringDemo
