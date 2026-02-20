import '../../.css/index.css'
import { useRef, useState } from 'react'
import useEventListener from '../../../packages/element-utils/src/useEventListener'
import { action } from 'storybook/actions'

const UseEventListenerDemo = () => {
  const [clickCount, setClickCount] = useState(0)
  const [keyPressed, setKeyPressed] = useState('')
  const buttonRef = useRef<HTMLDivElement>(null)

  // 监听元素点击
  useEventListener(
    'click',
    () => {
      setClickCount((c) => c + 1)
      action('元素点击')(`点击次数: ${clickCount + 1}`)
    },
    { target: buttonRef }
  )

  // 监听全局键盘事件
  useEventListener('keydown', (event) => {
    setKeyPressed(event.key)
    action('键盘按下')(event.key)
  })

  // 监听 window resize
  useEventListener('resize', () => {
    action('窗口大小变化')({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>事件监听</div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ marginBottom: 8, color: '#666' }}>
          点击下方按钮，或按键盘任意键：
        </div>
        <div
          ref={buttonRef}
          style={{
            width: 200,
            height: 80,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          点击我: {clickCount} 次
        </div>
      </div>

      <div
        style={{
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <div>
          最后按下的键：
          <span style={{ color: '#1890ff', fontWeight: 'bold' }}>
            {keyPressed || '无'}
          </span>
        </div>
      </div>

      <div style={{ color: '#999', fontSize: 12 }}>
        提示：调整浏览器窗口大小可以在 Actions 面板看到 resize 事件
      </div>
    </div>
  )
}

export default UseEventListenerDemo
