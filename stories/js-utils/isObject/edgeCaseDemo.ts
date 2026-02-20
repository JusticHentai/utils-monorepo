import { action } from 'storybook/actions'
import isObject from '../../../packages/js-utils/src/isObject'

const edgeCaseDemo = () => {
  const results = {
    '{}': isObject({}),
    '[]': isObject([]),
    '函数': isObject(() => {}),
    'null': isObject(null),
    '1': isObject(1),
    '"string"': isObject('abc'),
  }

  action('isObject - 边界情况')(results)
}

export default edgeCaseDemo
