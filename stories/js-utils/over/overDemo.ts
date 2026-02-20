import { action } from 'storybook/actions'
import over from '../../../packages/js-utils/src/over'

const overDemo = () => {
  // lodash 测试: 调用多个函数
  const fn = over([Math.max, Math.min])
  action('over - Math.max & Math.min')({
    'over([max, min])(1,2,3,4)': fn(1, 2, 3, 4),
    期望: [4, 1],
  })

  // lodash 测试: 提供参数给所有函数
  const capture = over([(...args: unknown[]) => args])
  action('over - 参数传递')({
    结果: capture('a', 'b', 'c'),
    说明: '每个函数都收到相同的参数',
  })

  // 实际使用
  const transform = over([
    (x: number) => x * 2,
    (x: number) => x + 10,
    (x: number) => x * x,
  ])
  action('over - 多重转换')({
    输入: 5,
    结果: transform(5),
    期望: [10, 15, 25],
  })
}

export default overDemo