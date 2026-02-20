import { action } from 'storybook/actions'
import useThrottle from '../../../packages/element-utils/src/useThrottle'

const useBasicDemo = () => {
  const { run, cancel, flush, isPending } = useThrottle(
    (value: string) => {
      action('节流回调执行')(value)
    },
    { delay: 1000 }
  )

  const trigger = () => {
    run('触发时间: ' + new Date().toLocaleTimeString())
    action('触发节流')('已触发')
  }

  const cancelThrottle = () => {
    cancel()
    action('取消节流')('已取消')
  }

  const flushThrottle = () => {
    flush()
    action('立即执行')('已立即执行')
  }

  const checkPending = () => {
    action('是否节流中')(isPending() ? '是' : '否')
  }

  return {
    trigger,
    cancelThrottle,
    flushThrottle,
    checkPending,
  }
}

export default useBasicDemo
