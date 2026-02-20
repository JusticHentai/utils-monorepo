import { action } from 'storybook/actions'
import useMergeProps from '../../../packages/element-utils/src/useMergeProps'

const useMultiDemo = () => {
  const defaults = { theme: 'light', size: 'medium', color: 'blue' }
  const userConfig = { theme: 'dark', fontSize: 14 }
  const overrides = { size: 'large', fontSize: 16 }

  const mergedProps = useMergeProps(defaults, userConfig, overrides)

  const showMergedProps = () => {
    action('默认配置')(defaults)
    action('用户配置')(userConfig)
    action('覆盖配置')(overrides)
    action('合并结果')(mergedProps)
  }

  return {
    showMergedProps,
  }
}

export default useMultiDemo
