import { action } from 'storybook/actions'
import createDebounceFn from '../../../packages/element-utils/src/createDebounceFn'

const leadingDemo = () => {
  const debouncedFn = createDebounceFn(
    (value: string) => {
      action('防抖函数执行')(value)
      return value
    },
    500,
    { leading: true, trailing: false }
  )

  action('leading 模式')('函数会在调用开始时立即执行')

  debouncedFn('第1次调用 - 立即执行')
  setTimeout(() => debouncedFn('第2次调用 - 被忽略'), 100)
  setTimeout(() => debouncedFn('第3次调用 - 被忽略'), 200)
}

export default leadingDemo
