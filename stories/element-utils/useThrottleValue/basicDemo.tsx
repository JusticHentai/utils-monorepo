import { useState, useEffect } from 'react'
import useThrottleValue from '../../../packages/element-utils/src/useThrottleValue'

/**
 * 基础用法示例
 * 展示 useThrottleValue 的节流效果
 */
const BasicDemo = () => {
  const [value, setValue] = useState('')
  const throttledValue = useThrottleValue(value, { delay: 500 })
  const [updateCount, setUpdateCount] = useState(0)

  useEffect(() => {
    if (throttledValue) {
      setUpdateCount((c) => c + 1)
    }
  }, [throttledValue])

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px',
      }}
    >
      <h3>基础用法</h3>
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="快速输入，观察节流值变化"
          style={{
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            width: '300px',
          }}
        />
      </div>
      <p>当前值: {value}</p>
      <p>节流值: {throttledValue}</p>
      <p>节流值更新次数: {updateCount}</p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        说明：节流时间为 500ms，节流值最多每 500ms 更新一次
      </p>
    </div>
  )
}

export default BasicDemo
