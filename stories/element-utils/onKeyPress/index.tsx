import '../../.css/index.css'
import { useEffect, useState } from 'react'
import onKeyPress from '../../../packages/element-utils/src/onKeyPress'
import { action } from 'storybook/actions'

const OnKeyPressDemo = () => {
  const [isListening, setIsListening] = useState(false)
  const [lastKey, setLastKey] = useState('')

  useEffect(() => {
    if (!isListening) return

    // 监听 Escape 键
    const stopEscape = onKeyPress('Escape', (event) => {
      setLastKey('Escape')
      action('按下 Escape')(event.key)
    })

    // 监听上下箭头
    const stopArrows = onKeyPress(['ArrowUp', 'ArrowDown'], (event) => {
      setLastKey(event.key)
      action('按下箭头键')(event.key)
    })

    // 监听 Ctrl+S
    const stopCtrlS = onKeyPress(
      's',
      (event) => {
        event.preventDefault()
        setLastKey('Ctrl+S')
        action('按下 Ctrl+S')('保存操作')
      },
      { modifiers: { ctrl: true } }
    )

    action('开始监听')('Escape, 上下箭头, Ctrl+S')

    return () => {
      stopEscape()
      stopArrows()
      stopCtrlS()
    }
  }, [isListening])

  return (
    <div>
      <div className="button" onClick={() => setIsListening(true)}>
        开始监听键盘
      </div>
      <div className="button" onClick={() => setIsListening(false)}>
        停止监听
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>监听状态: {isListening ? '监听中' : '未监听'}</p>
        <p>最后按键: {lastKey || '无'}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          监听: Escape, ↑↓箭头, Ctrl+S
        </p>
      </div>
    </div>
  )
}

export default OnKeyPressDemo
