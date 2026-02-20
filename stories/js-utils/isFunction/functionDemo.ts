import { action } from 'storybook/actions'
import isFunction from '../../../packages/js-utils/src/isFunction'

const functionDemo = () => {
  action('isFunction - 函数类型')({
    '箭头函数': isFunction(() => {}),
    'function 声明': isFunction(function() {}),
    'class': isFunction(class {}),
    'Array.isArray': isFunction(Array.isArray),
    'RegExp': isFunction(RegExp),
  })

  action('isFunction - 非函数类型')({
    '对象': isFunction({ a: 1 }),
    '数组': isFunction([1, 2]),
    '正则': isFunction(/x/),
    '字符串': isFunction('func'),
    'null': isFunction(null),
    'undefined': isFunction(undefined),
  })
}

export default functionDemo
