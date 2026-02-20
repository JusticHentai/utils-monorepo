import { useEffect, useRef, useState } from 'react'
import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'
import type { BehaviorInfo } from '../../../packages/element-utils/src/BehaviorMonitor/interface'
import '../../.css/index.css'
import observeClickDemo from './observeClickDemo'
import observeInputDemo from './observeInputDemo'
import observeRouteChangeDemo from './observeRouteChangeDemo'
import observeScrollDemo from './observeScrollDemo'
import observeVisibilityDemo from './observeVisibilityDemo'

const BehaviorMonitorDemo = () => {
  const [isListening, setIsListening] = useState(false)
  const [behaviors, setBehaviors] = useState<BehaviorInfo[]>([])
  const monitorRef = useRef<BehaviorMonitor | null>(null)

  useEffect(() => {
    if (!isListening) return

    const monitor = new BehaviorMonitor({
      maxBehaviors: 50,
      inputOptions: { recordValue: true },
    })
    monitorRef.current = monitor

    monitor.observe((behavior) => {
      setBehaviors(monitor.getBehaviors())
      action('行为捕获')(behavior)
    })

    action('开始监听')('已启动行为监控')

    return () => {
      monitor.stop()
      monitorRef.current = null
      action('停止监听')('已清理所有监听器')
    }
  }, [isListening])

  const trackCustom = () => {
    const monitor = monitorRef.current
    if (!monitor) {
      action('提示')('请先开始监听')
      return
    }

    const behavior = monitor.trackCustom('用户操作', {
      action: 'button_click',
      label: '自定义事件',
    })

    setBehaviors(monitor.getBehaviors())
    action('自定义行为')(behavior)
  }

  const clearBehaviors = () => {
    const monitor = monitorRef.current
    if (monitor) {
      monitor.clear()
      setBehaviors([])
      action('清空记录')('已清空所有行为记录')
    }
  }

  return (
    <div>
      <div className="button" onClick={() => setIsListening(true)}>
        开始全量监听
      </div>
      <div className="button" onClick={() => setIsListening(false)}>
        停止全量监听
      </div>
      <div className="button" onClick={trackCustom}>
        记录自定义行为
      </div>
      <div className="button" onClick={clearBehaviors}>
        清空行为记录
      </div>
      <div className="button" onClick={observeClickDemo}>
        单独监控点击（5s）
      </div>
      <div className="button" onClick={observeScrollDemo}>
        单独监控滚动（5s）
      </div>
      <div className="button" onClick={observeInputDemo}>
        单独监控输入（10s）
      </div>
      <div className="button" onClick={observeRouteChangeDemo}>
        单独监控路由变化
      </div>
      <div className="button" onClick={observeVisibilityDemo}>
        单独监控页面可见性（30s）
      </div>

      <div className="area">
        <div id="click-target" className="card">
          点击此区域测试
        </div>
      </div>

      <div className="area">
        <input
          id="text-input"
          type="text"
          placeholder="普通输入框"
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', marginRight: 8 }}
        />
        <input
          id="password-input"
          type="password"
          placeholder="密码输入框（敏感）"
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', marginRight: 8 }}
        />
        <input
          id="secret-input"
          name="secret_key"
          type="text"
          placeholder="敏感字段输入框"
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc' }}
        />
      </div>

      <div className="card">
        <p>监听状态: {isListening ? '监听中' : '未监听'}</p>
        <p>已记录行为: {behaviors.length} 条</p>
        {behaviors.length > 0 && (
          <div style={{ marginTop: 8, textAlign: 'left', fontSize: 12 }}>
            {behaviors.slice(-5).map((b, i) => (
              <p key={i} style={{ margin: '4px 0', color: '#a8b4ff' }}>
                [{b.type}] {new Date(b.timestamp).toLocaleTimeString()}
                {b.data && ` - ${JSON.stringify(b.data).slice(0, 60)}`}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BehaviorMonitorDemo
