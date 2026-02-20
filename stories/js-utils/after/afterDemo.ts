import { action } from 'storybook/actions'
import after from '../../../packages/js-utils/src/after'

let callCount = 0
const wrapped = after(3, () => {
  return '函数被执行了！'
})

const afterDemo = () => {
  callCount++
  const result = wrapped()

  action(`after(3, fn) - 第${callCount}次调用`)({
    当前调用次数: callCount,
    阈值: 3,
    是否执行: callCount >= 3 ? '✅ 已执行' : '❌ 未达阈值',
    返回值: result,
    说明:
      callCount < 3
        ? `还需调用 ${3 - callCount} 次才会执行`
        : '已达阈值，每次调用都会执行',
  })
}

export default afterDemo
