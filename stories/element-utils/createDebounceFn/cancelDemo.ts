import { action } from 'storybook/actions'
import createDebounceFn from '../../../packages/element-utils/src/createDebounceFn'

const cancelDemo = () => {
  const debouncedFn = createDebounceFn((value: string) => {
    action('防抖函数执行')(value)
    return value
  }, 500)

  debouncedFn('调用后取消')

  // 200ms 后取消
  setTimeout(() => {
    debouncedFn.cancel()
    action('已取消')('防抖函数被取消，不会执行')
  }, 200)
}

export default cancelDemo
