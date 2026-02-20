import { action } from 'storybook/actions'
import after from '../../../packages/js-utils/src/after'

const edgeCaseDemo = () => {
  // after(0, fn) - 调用 1 次就执行
  let count0 = 0
  const afterZero = after(0, () => {
    count0++
  })
  afterZero()

  // after(1, fn) - 调用 1 次执行
  let count1 = 0
  const afterOne = after(1, () => {
    count1++
  })
  afterOne()

  // after(5, fn) 调用 4 次不执行，调用 5 次执行 1 次
  let count5 = 0
  const afterFive = after(5, () => {
    count5++
  })
  for (let i = 0; i < 4; i++) afterFive()
  const beforeThreshold = count5
  afterFive()
  const afterThreshold = count5

  action('after - 边界情况')({
    'after(0, fn) 调用1次': { 执行次数: count0, 说明: 'n=0 时调用1次即执行' },
    'after(1, fn) 调用1次': { 执行次数: count1, 说明: 'n=1 时第1次调用即执行' },
    'after(5, fn) 调用4次': {
      执行次数: beforeThreshold,
      说明: '未达阈值不执行',
    },
    'after(5, fn) 调用5次': {
      执行次数: afterThreshold,
      说明: '第5次调用时执行',
    },
  })
}

export default edgeCaseDemo
