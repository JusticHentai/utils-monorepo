import { useState } from 'react'
import useRafTimeout from '../../../packages/element-utils/src/useRafTimeout'

/**
 * 基础用法示例
 * 展示 useRafTimeout 的延时执行功能
 */
const BasicDemo = () => {
  const [state, setState] = useState(1)
  const [delay, setDelay] = useState<number | undefined>(undefined)

  useRafTimeout(() => {
    setState((s) => s + 1)
    setDelay(undefined)
  }, delay)

  const handleStart = () => {
    setDelay(3000)
  }

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px',
      }}
    >
      <h3>基础用法</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>状态值: {state}</p>
      <p style={{ color: delay !== undefined ? '#1890ff' : '#999' }}>
        {delay !== undefined ? '等待 3 秒后状态值 +1...' : '点击按钮开始计时'}
      </p>
      <div style={{ marginTop: '16px' }}>
        <button
          onClick={handleStart}
          disabled={delay !== undefined}
          style={{
            padding: '8px 16px',
            backgroundColor: delay !== undefined ? '#d9d9d9' : '#1890ff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: delay !== undefined ? 'not-allowed' : 'pointer',
          }}
        >
          {delay !== undefined ? '计时中...' : '开始 3 秒延时'}
        </button>
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '16px' }}>
        说明：使用 requestAnimationFrame 实现延时，比 setTimeout 更流畅
      </p>
    </div>
  )
}

export default BasicDemo
