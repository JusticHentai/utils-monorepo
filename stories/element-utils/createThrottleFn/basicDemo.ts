import { action } from 'storybook/actions'
import createThrottleFn from '../../../packages/element-utils/src/createThrottleFn'

const basicDemo = () => {
  let callCount = 0
  const throttledFn = createThrottleFn((value: string) => {
    callCount++
    action('节流函数执行')({ value, callCount })
    return value
  }, 500)

  action('开始连续调用')('每 100ms 调用一次，持续 1 秒')

  // 模拟连续调用 10 次
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      throttledFn(`第 ${i + 1} 次调用`)
    }, i * 100)
  }

  action('提示')('由于节流，500ms 内只会执行一次')
}

export default basicDemo
