import { action } from 'storybook/actions'
import nthArg from '../../../packages/js-utils/src/nthArg'

const nthArgDemo = () => {
  const args = ['a', 'b', 'c', 'd']

  // lodash 测试: 返回第 n 个参数
  action('nthArg - 正索引')({
    'nthArg(0)(...)': nthArg(0)(...args),
    'nthArg(1)(...)': nthArg(1)(...args),
    'nthArg(2)(...)': nthArg(2)(...args),
    'nthArg(3)(...)': nthArg(3)(...args),
  })

  // lodash 测试: 负索引
  action('nthArg - 负索引')({
    'nthArg(-1)(...)': nthArg(-1)(...args),
    'nthArg(-2)(...)': nthArg(-2)(...args),
    说明: '-1 => d, -2 => c',
  })

  // lodash 测试: 默认取第一个
  action('nthArg - 默认')({
    'nthArg()(...)': nthArg()(...args),
    期望: 'a',
  })

  // lodash 测试: 超出范围返回 undefined
  action('nthArg - 超出范围')({
    'nthArg(Infinity)(...)': nthArg(Infinity)(...args),
    'nthArg(4)(...)': nthArg(4)(...args),
    'nthArg(1)()': nthArg(1)(),
    期望: undefined,
  })
}

export default nthArgDemo