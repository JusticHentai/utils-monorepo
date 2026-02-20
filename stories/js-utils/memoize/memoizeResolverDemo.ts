import { action } from 'storybook/actions'
import memoize from '../../../packages/js-utils/src/memoize'

const memoizeResolverDemo = () => {
  // lodash 测试: 自定义 resolver
  const add = (a: number, b: number, c: number) => a + b + c
  const memoized = memoize(add, add as any)

  action('memoize + resolver')({
    'memoized(1,2,3)': memoized(1, 2, 3),
    'memoized(1,3,5)': memoized(1, 3, 5),
    说明: 'resolver 也是 add 函数，所以缓存键分别是6和9，不会冲突',
  })

  // 实际使用: 按 id 缓存
  const getUser = memoize(
    (id: number, name: string) => ({ id, name, time: Date.now() }),
    (id: number) => id,
  )

  const first = getUser(1, 'Alice')
  const cached = getUser(1, 'Bob')

  action('memoize - 按 id 缓存')({
    第一次: first,
    第二次缓存: cached,
    相同引用: first === cached,
    说明: 'resolver 返回 id，相同 id 返回缓存结果',
  })
}

export default memoizeResolverDemo