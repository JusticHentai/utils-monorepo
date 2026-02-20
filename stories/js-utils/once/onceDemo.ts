import { action } from 'storybook/actions'
import once from '../../../packages/js-utils/src/once'

// 模块级别创建 once 函数以保持状态
let callCount = 0
const initialize = once(() => {
  return ++callCount
})

const onceDemo = () => {
  // lodash 测试: 只调用一次，返回相同结果
  const result1 = initialize()
  const result2 = initialize()
  const result3 = initialize()

  action('once - 只执行一次')({
    第一次: result1,
    第二次: result2,
    第三次: result3,
    实际调用次数: callCount,
    所有结果相同: result1 === result2 && result2 === result3,
    说明: '无论调用多少次，函数只执行一次，始终返回首次结果',
  })

  // lodash 测试: 忽略递归调用
  let recursiveCount = 0
  const recursiveOnce = once(() => {
    recursiveOnce() // 递归调用被忽略
    return ++recursiveCount
  })

  action('once - 忽略递归')({
    结果: recursiveOnce(),
    调用次数: recursiveCount,
    说明: '递归调用不会导致重复执行',
  })
}

export default onceDemo