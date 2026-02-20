import { action } from 'storybook/actions'
import isError from '../../../packages/js-utils/src/isError'

const edgeCaseDemo = () => {
  const results = {
    'new Error()': isError(new Error()),
    'new TypeError()': isError(new TypeError()),
    '普通对象': isError({ message: 'error' }),
    'null': isError(null),
  }

  action('isError - 边界情况')(results)
}

export default edgeCaseDemo
