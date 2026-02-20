import '../../.css/index.css'
import { useState, useCallback } from 'react'
import debounce from '../../../packages/js-utils/src/debounce'
import { action } from 'storybook/actions'

const DebounceDemo = () => {
  const [count, setCount] = useState(0)
  const [debouncedCount, setDebouncedCount] = useState(0)

  const debouncedAction = useCallback(
    debounce((val: number) => {
      setDebouncedCount(val)
      action('防抖触发')({ 值: val })
    }, 500),
    []
  )

  const handleClick = () => {
    const newCount = count + 1
    setCount(newCount)
    action('点击')({ 当前计数: newCount })
    debouncedAction(newCount)
  }

  const handleLeadingClick = () => {
    const debouncedLeading = debounce(
      () => {
        action('leading 模式触发')('立即执行')
      },
      500,
      { leading: true, trailing: false }
    )
    debouncedLeading()
  }

  return (
    <div>
      <div className="button" onClick={handleClick}>
        点击测试防抖（连续点击）
      </div>
      <div className="button" onClick={handleLeadingClick}>
        leading 模式（立即执行）
      </div>
      <div style={{ marginTop: 20 }}>
        <p>点击次数: {count}</p>
        <p>防抖后执行次数: {debouncedCount}</p>
        <p style={{ color: '#666', fontSize: 12 }}>
          快速连续点击，观察防抖效果（500ms 后执行）
        </p>
      </div>
    </div>
  )
}

export default DebounceDemo
