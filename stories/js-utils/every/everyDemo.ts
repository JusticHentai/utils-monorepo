import { action } from 'storybook/actions'
import every from '../../../packages/js-utils/src/every'

const everyDemo = () => {
  // 全部为 truthy
  action('every - 全部 truthy')(
    every([true, 1, 'a'], (v) => Boolean(v)),
  )

  // 空集合返回 true（vacuous truth）
  action('every - 空数组返回 true')(
    every([], () => false),
  )

  // 短路求值：遇到第一个 falsey 就停止
  let count = 0
  const result = every([true, null, true], (v) => {
    count++
    return Boolean(v)
  })
  action('every - 短路求值')({
    result,
    '检查次数': count,
    说明: '遇到 null 就停止，只检查了2次',
  })

  // undefined 集合
  action('every - undefined 集合')(
    every([undefined, undefined, undefined], (v) => Boolean(v)),
  )
}

export default everyDemo
