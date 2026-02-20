import '../../.css/index.css'
import { useEffect, useState } from 'react'
import onWindowResize from '../../../packages/element-utils/src/onWindowResize'
import { action } from 'storybook/actions'

const OnWindowResizeDemo = () => {
  const [isListening, setIsListening] = useState(false)
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })

  useEffect(() => {
    if (!isListening) return

    const stop = onWindowResize(
      ({ width, height }) => {
        setSize({ width, height })
        action('窗口尺寸变化')({ width, height })
      },
      { throttle: 100, immediate: true }
    )

    return () => {
      stop()
    }
  }, [isListening])

  return (
    <div>
      <div className="button" onClick={() => setIsListening(true)}>
        开始监听窗口尺寸
      </div>
      <div className="button" onClick={() => setIsListening(false)}>
        停止监听
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>监听状态: {isListening ? '监听中' : '未监听'}</p>
        <p>窗口尺寸: {size.width} x {size.height}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          提示：调整浏览器窗口大小查看变化
        </p>
      </div>
    </div>
  )
}

export default OnWindowResizeDemo
