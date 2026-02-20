import { action } from 'storybook/actions'
import isFunction from '../../../packages/js-utils/src/isFunction'

const edgeCaseDemo = () => {
  const results = {
    '箭头函数': isFunction(() => {}),
    'function': isFunction(function() {}),
    'class': isFunction(class {}),
    '正则': isFunction(/abc/),
    'null': isFunction(null),
  }

  action('isFunction - 边界情况')(results)
}

export default edgeCaseDemo
