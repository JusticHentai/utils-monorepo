import { action } from 'storybook/actions'
import isArguments from '../../../packages/js-utils/src/isArguments'

const isArgumentsDemo = () => {
  // 在函数内部获取 arguments
  function testFn() { return arguments }
  const args = testFn()

  action('isArguments 演示')({
    'arguments 对象': isArguments(args),
    '普通数组': isArguments([1, 2, 3]),
    '字符串': isArguments('abc'),
    'null': isArguments(null),
  })
}

export default isArgumentsDemo
