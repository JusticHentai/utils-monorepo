import { action } from 'storybook/actions'
import at from '../../../packages/js-utils/src/at'

const basicDemo = () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 }

  action('at - 按路径取多个值')({
    输入对象: obj,
    路径: ['a', 'c'],
    结果: at(obj, ['a', 'c']),
  })

  // 不存在的路径返回 undefined
  action('at - 不存在的路径返回 undefined')({
    输入对象: obj,
    路径: ['a', 'x', 'c'],
    结果: at(obj, ['a', 'x', 'c']),
    说明: '路径 x 不存在，对应位置为 undefined',
  })

  // 空路径返回空数组
  action('at - 空路径返回空数组')({
    路径: [],
    结果: at(obj, []),
  })
}

export default basicDemo
