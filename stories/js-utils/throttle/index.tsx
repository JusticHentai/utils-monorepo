import '../../.css/index.css'
import { useState, useCallback } from 'react'
import throttle from '../../../packages/js-utils/src/throttle'
import { action } from 'storybook/actions'

const ThrottleDemo = () => {
  const [count, setCount] = useState(0)
  const [throttledCount, setThrottledCount] = useState(0)

  const throttledAction = useCallback(
    throttle((val: number) => {
      setThrottledCount((prev) => prev + 1)
      action('节流触发')({ 点击次数: val })
    }, 1000),
    []
  )

  const handleClick = () => {
    const newCount = count + 1
    setCount(newCount)
    action('点击')({ 当前计数: newCount })
    throttledAction(newCount)
  }

  return (
    <div>
      <div className="button" onClick={handleClick}>
        点击测试节流（连续点击）
      </div>
      <div style={{ marginTop: 20 }}>
        <p>点击次数: {count}</p>
        <p>节流后执行次数: {throttledCount}</p>
        <p style={{ color: '#666', fontSize: 12 }}>
          快速连续点击，观察节流效果（每 1 秒最多执行 1 次）
        </p>
      </div>
    </div>
  )
}

export default ThrottleDemo
