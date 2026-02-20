import { useState } from 'react'
import useRafInterval from '../../../packages/element-utils/src/useRafInterval'

/**
 * 基础用法示例
 * 展示 useRafInterval 的定时器功能
 */
const BasicDemo = () => {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState<number | undefined>(1000)

  const clear = useRafInterval(
    () => {
      setCount((c) => c + 1)
    },
    delay,
    { immediate: false }
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
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>计数: {count}</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <button
          onClick={() => setDelay(1000)}
          style={{
            padding: '8px 16px',
            backgroundColor: delay === 1000 ? '#1890ff' : '#f0f0f0',
            color: delay === 1000 ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          1000ms 间隔
        </button>
        <button
          onClick={() => setDelay(500)}
          style={{
            padding: '8px 16px',
            backgroundColor: delay === 500 ? '#1890ff' : '#f0f0f0',
            color: delay === 500 ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          500ms 间隔
        </button>
        <button
          onClick={() => setDelay(undefined)}
          style={{
            padding: '8px 16px',
            backgroundColor: delay === undefined ? '#ff4d4f' : '#f0f0f0',
            color: delay === undefined ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          停止
        </button>
        <button
          onClick={clear}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          清除
        </button>
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '16px' }}>
        说明：使用 requestAnimationFrame 实现，比 setInterval 更流畅
      </p>
    </div>
  )
}

export default BasicDemo
