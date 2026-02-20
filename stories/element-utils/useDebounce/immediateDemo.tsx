import { action } from 'storybook/actions'
import useDebounce from '../../../packages/element-utils/src/useDebounce'

const useImmediateDemo = () => {
  const { run, cancel } = useDebounce(
    (value: string) => {
      action('防抖回调执行（立即模式）')(value)
    },
    { delay: 1000, immediate: true }
  )

  const trigger = () => {
    run('触发时间: ' + new Date().toLocaleTimeString())
    action('触发防抖（立即模式）')('首次立即执行，后续1秒内不再执行')
  }

  const cancelDebounce = () => {
    cancel()
    action('取消防抖')('已取消')
  }

  return {
    trigger,
    cancelDebounce,
  }
}

export default useImmediateDemo
