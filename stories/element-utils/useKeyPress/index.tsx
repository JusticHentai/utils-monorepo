import '../../.css/index.css'
import { useState } from 'react'
import useKeyPress from '../../../packages/element-utils/src/useKeyPress'
import { action } from 'storybook/actions'

const UseKeyPressDemo = () => {
  const [counter, setCounter] = useState(0)
  const [lastKey, setLastKey] = useState('')

  // 监听方向键
  useKeyPress('uparrow', () => {
    setCounter((s) => s + 1)
    setLastKey('↑ ArrowUp')
    action('ArrowUp')('计数 +1')
  })

  useKeyPress('downarrow', () => {
    setCounter((s) => s - 1)
    setLastKey('↓ ArrowDown')
    action('ArrowDown')('计数 -1')
  })

  // 监听 Enter 键
  useKeyPress('enter', () => {
    setLastKey('↵ Enter')
    action('Enter')('Enter 键被按下')
  })

  // 监听组合键 Ctrl+S
  useKeyPress(
    'ctrl.s',
    (event) => {
      event.preventDefault()
      setLastKey('Ctrl + S')
      action('Ctrl+S')('组合键被按下')
    },
    { exactMatch: true }
  )

  // 监听多个按键
  useKeyPress(['a', 'b', 'c'], (_event, key) => {
    setLastKey(String(key).toUpperCase())
    action('A/B/C')(key)
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>键盘按键监听</div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div style={{ marginBottom: 8 }}>
          计数器：<span style={{ color: '#1890ff', fontSize: 24 }}>{counter}</span>
        </div>
        <div>
          最后按下的键：
          <span style={{ color: '#52c41a', fontWeight: 'bold' }}>
            {lastKey || '无'}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: 16, color: '#666' }}>
        <div style={{ marginBottom: 8, fontWeight: 'bold' }}>尝试以下操作：</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>按 <code>↑</code> 方向键：计数 +1</li>
          <li>按 <code>↓</code> 方向键：计数 -1</li>
          <li>按 <code>Enter</code> 键</li>
          <li>按 <code>Ctrl + S</code> 组合键</li>
          <li>按 <code>A</code>、<code>B</code>、<code>C</code> 键</li>
        </ul>
      </div>

      <div
        className="button"
        onClick={() => {
          setCounter(0)
          setLastKey('')
          action('重置')('计数器已重置')
        }}
      >
        重置计数器
      </div>
    </div>
  )
}

export default UseKeyPressDemo
