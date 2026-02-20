import { action } from 'storybook/actions'
import createDebounceFn from '../../../packages/element-utils/src/createDebounceFn'

const basicDemo = () => {
  const debouncedFn = createDebounceFn((value: string) => {
    action('防抖函数执行')(value)
    return value
  }, 500)

  // 模拟连续调用
  action('开始连续调用')('将在 500ms 后执行最后一次')

  debouncedFn('第1次调用')
  setTimeout(() => debouncedFn('第2次调用'), 100)
  setTimeout(() => debouncedFn('第3次调用'), 200)
  setTimeout(() => debouncedFn('第4次调用'), 300)

  action('提示')('只有最后一次调用会在 500ms 后执行')
}

export default basicDemo
