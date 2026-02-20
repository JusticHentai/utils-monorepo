import { action } from 'storybook/actions'
import isNative from '../../../packages/js-utils/src/isNative'

const edgeCaseDemo = () => {
  const results = {
    'Array.prototype.push': isNative(Array.prototype.push),
    '自定义函数': isNative(() => {}),
    'null': isNative(null),
  }

  action('isNative - 边界情况')(results)
}

export default edgeCaseDemo
