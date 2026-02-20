import { action } from 'storybook/actions'
import useDebounce from '../../../packages/element-utils/src/useDebounce'

const useBasicDemo = () => {
  const { run, cancel, flush, isPending } = useDebounce(
    (value: string) => {
      action('防抖回调执行')(value)
    },
    { delay: 1000 }
  )

  const trigger = () => {
    run('触发时间: ' + new Date().toLocaleTimeString())
    action('触发防抖')('已触发，1秒后执行')
  }

  const cancelDebounce = () => {
    cancel()
    action('取消防抖')('已取消')
  }

  const flushDebounce = () => {
    flush()
    action('立即执行')('已立即执行')
  }

  const checkPending = () => {
    action('是否等待中')(isPending() ? '是' : '否')
  }

  return {
    trigger,
    cancelDebounce,
    flushDebounce,
    checkPending,
  }
}

export default useBasicDemo
