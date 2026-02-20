import { action } from 'storybook/actions'
import useThrottle from '../../../packages/element-utils/src/useThrottle'

const useTrailingDemo = () => {
  const { run, cancel } = useThrottle(
    (value: string) => {
      action('节流回调执行（仅结束时）')(value)
    },
    { delay: 1000, leading: false, trailing: true }
  )

  const trigger = () => {
    run('触发时间: ' + new Date().toLocaleTimeString())
    action('触发节流（仅结束时执行）')('1秒后执行')
  }

  const cancelThrottle = () => {
    cancel()
    action('取消节流')('已取消')
  }

  return {
    trigger,
    cancelThrottle,
  }
}

export default useTrailingDemo
