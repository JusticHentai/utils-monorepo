import { useEffect, useState } from 'react'
import { action } from 'storybook/actions'
import onNetworkChange from '../../../packages/element-utils/src/onNetworkChange'
import '../../.css/index.css'

const OnNetworkChangeDemo = () => {
  const [isListening, setIsListening] = useState(false)
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    if (!isListening) return

    const stop = onNetworkChange((isOnline) => {
      setOnline(isOnline)
      action('网络状态变化')(isOnline ? '在线' : '离线')
    })

    action('开始监听')('当前状态: ' + (navigator.onLine ? '在线' : '离线'))

    return () => {
      stop()
      action('停止监听')('已清理监听器')
    }
  }, [isListening])

  return (
    <div>
      <div className="button" onClick={() => setIsListening(true)}>
        开始监听网络
      </div>
      <div className="button" onClick={() => setIsListening(false)}>
        停止监听
      </div>

      <div className="card">
        <p>监听状态: {isListening ? '监听中' : '未监听'}</p>
        <p>
          网络状态:{' '}
          <span style={{ color: online ? '#90EE90' : '#FF6B6B' }}>
            {online ? '🟢 在线' : '🔴 离线'}
          </span>
        </p>
        <p className="desc">
          提示：可在浏览器开发者工具中模拟离线（Network → Offline）
        </p>
      </div>
    </div>
  )
}

export default OnNetworkChangeDemo
