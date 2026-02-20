import { action } from 'storybook/actions'
import isPlainObject from '../../../packages/js-utils/src/isPlainObject'

const edgeCaseDemo = () => {
  const results = {
    '{}': isPlainObject({}),
    'Object.create(null)': isPlainObject(Object.create(null)),
    'new Date()': isPlainObject(new Date()),
    '[]': isPlainObject([]),
    'null': isPlainObject(null),
  }

  action('isPlainObject - 边界情况')(results)
}

export default edgeCaseDemo
