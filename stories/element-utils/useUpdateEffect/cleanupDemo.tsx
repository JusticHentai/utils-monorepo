import { useState } from 'react'
import { action } from 'storybook/actions'
import useUpdateEffect from '../../../packages/element-utils/src/useUpdateEffect'

const useCleanupDemo = () => {
  const [value, setValue] = useState('初始值')

  // 演示带清理函数的 useUpdateEffect
  useUpdateEffect(() => {
    action('useUpdateEffect 触发')(`value 更新为: ${value}`)

    // 返回清理函数，在下次 effect 执行前或组件卸载时调用
    return () => {
      action('清理函数执行')(`清理旧值: ${value}`)
    }
  }, [value])

  const changeValue = () => {
    const newValue = `更新于 ${new Date().toLocaleTimeString()}`
    setValue(newValue)
    action('点击按钮')(`设置新值: ${newValue}`)
  }

  return {
    value,
    changeValue,
  }
}

export default useCleanupDemo
