import { useState } from 'react'
import useThrottleEffect from '../../../packages/element-utils/src/useThrottleEffect'

/**
 * 基础用法示例
 * 展示 useThrottleEffect 的节流效果
 */
const BasicDemo = () => {
  const [value, setValue] = useState('')
  const [effectCount, setEffectCount] = useState(0)

  useThrottleEffect(
    () => {
      setEffectCount((c) => c + 1)
    },
    [value],
    { delay: 500 }
  )

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
          placeholder="快速输入，effect 节流触发"
          style={{
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            width: '300px',
          }}
        />
      </div>
      <p>输入值: {value}</p>
      <p>Effect 执行次数: {effectCount}</p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        说明：节流时间为 500ms，快速输入时 effect 最多每 500ms 执行一次
      </p>
    </div>
  )
}

export default BasicDemo
