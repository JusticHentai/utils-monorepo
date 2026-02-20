import { action } from 'storybook/actions'
import isError from '../../../packages/js-utils/src/isError'

const errorDemo = () => {
  // Error 及其子类
  action('isError - Error 类型')({
    'new Error()': isError(new Error('test')),
    'new TypeError()': isError(new TypeError('type error')),
    'new RangeError()': isError(new RangeError('range error')),
    'new DOMException()': isError(new DOMException('abort', 'AbortError')),
  })

  // 非 Error
  action('isError - 非 Error 类型')({
    '"error" 字符串': isError('error'),
    'Error 构造函数': isError(Error),
    '类似 Error 的对象': isError({ message: 'err' }),
    'null': isError(null),
    '1': isError(1),
  })
}

export default errorDemo
