import { useState } from 'react'
import { action } from 'storybook/actions'
import useUpdateEffect from '../../../packages/element-utils/src/useUpdateEffect'

const useBasicDemo = () => {
  const [count, setCount] = useState(0)

  // 首次渲染不会执行，只有 count 更新时才会执行
  useUpdateEffect(() => {
    action('useUpdateEffect 触发')(`count 更新为: ${count}`)
  }, [count])

  const increment = () => {
    setCount((prev) => prev + 1)
    action('点击按钮')('count + 1')
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
    action('点击按钮')('count - 1')
  }

  return {
    count,
    increment,
    decrement,
  }
}

export default useBasicDemo
