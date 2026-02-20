import { action } from 'storybook/actions'
import now from '../../../packages/js-utils/src/now'

const nowDemo = () => {
  // lodash 测试: 返回自 Unix 纪元以来的毫秒数
  const stamp = Date.now()
  const actual = now()

  action('now - 时间戳')({
    'now()': actual,
    'Date.now()': stamp,
    '>= Date.now()': actual >= stamp,
    说明: 'now() 应返回 >= Date.now() 的值',
  })

  // 计时用途
  const t1 = now()
  let sum = 0
  for (let i = 0; i < 1000000; i++) sum += i
  const t2 = now()

  action('now - 计时')({
    耗时ms: t2 - t1,
    't2 > t1': t2 > t1,
  })
}

export default nowDemo