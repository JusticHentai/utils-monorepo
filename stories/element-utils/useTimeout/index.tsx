import '../../.css/index.css'
import { useState } from 'react'
import useTimeout from '../../../packages/element-utils/src/useTimeout'
import { action } from 'storybook/actions'

const UseTimeoutDemo = () => {
  const [message, setMessage] = useState('点击按钮开始')
  const [delay, setDelay] = useState<number | undefined>(undefined)

  const clear = useTimeout(() => {
    setMessage('延时回调已执行！')
    setDelay(undefined)
    action('timeout 执行')('延时回调触发')
  }, delay)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>延时器 Timeout</div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 18, color: '#1890ff' }}>{message}</div>
        <div style={{ color: '#999', marginTop: 8 }}>
          状态：{delay ? `等待中 (${delay}ms 后执行)` : '空闲'}
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          setMessage('等待中...')
          setDelay(3000)
          action('启动延时器')('3 秒后执行')
        }}
      >
        3 秒后执行
      </div>
      <div
        className="button"
        onClick={() => {
          setMessage('等待中...')
          setDelay(1000)
          action('启动延时器')('1 秒后执行')
        }}
      >
        1 秒后执行
      </div>
      <div
        className="button"
        onClick={() => {
          clear()
          setDelay(undefined)
          setMessage('已取消')
          action('取消延时器')('已取消')
        }}
      >
        取消
      </div>
      <div
        className="button"
        onClick={() => {
          setMessage('点击按钮开始')
          setDelay(undefined)
          action('重置')('已重置')
        }}
      >
        重置
      </div>
    </div>
  )
}

export default UseTimeoutDemo
