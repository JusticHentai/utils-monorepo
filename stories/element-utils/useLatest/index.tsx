import '../../.css/index.css'
import { useState, useEffect } from 'react'
import useLatest from '../../../packages/element-utils/src/useLatest'
import { action } from 'storybook/actions'

const UseLatestDemo = () => {
  const [count, setCount] = useState(0)
  const latestCount = useLatest(count)

  // 演示闭包问题
  useEffect(() => {
    const timer = setInterval(() => {
      // 使用 latestCount.current 总是能获取最新值
      action('定时器读取 latestCount.current')(latestCount.current)
    }, 2000)

    return () => clearInterval(timer)
  }, []) // 依赖数组为空，但 latestCount.current 总是最新的

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>获取最新值</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        useLatest 可以避免闭包问题，总是获取最新值：
      </div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div style={{ fontSize: 24 }}>
          count: <span style={{ color: '#1890ff' }}>{count}</span>
        </div>
        <div style={{ marginTop: 8, color: '#666', fontSize: 12 }}>
          每 2 秒会在 Actions 面板输出 latestCount.current
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          setCount((c) => c + 1)
          action('增加 count')(count + 1)
        }}
      >
        count + 1
      </div>
      <div
        className="button"
        onClick={() => {
          setCount(0)
          action('重置')('count 已重置')
        }}
      >
        重置
      </div>

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：即使 useEffect 的依赖数组为空，latestCount.current 也能获取到最新的
        count 值
      </div>
    </div>
  )
}

export default UseLatestDemo
