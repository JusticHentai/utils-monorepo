import { useEffect, useState } from 'react'
import { action } from 'storybook/actions'
import onBFCacheRestore from '../../../packages/element-utils/src/onBFCacheRestore'
import '../../.css/index.css'

const OnBFCacheRestoreDemo = () => {
  const [restoreCount, setRestoreCount] = useState(0)
  const [lastRestoreTime, setLastRestoreTime] = useState<string | null>(null)

  // 始终监听 BFCache 恢复事件
  useEffect(() => {
    const stop = onBFCacheRestore((event) => {
      setRestoreCount((c) => c + 1)
      setLastRestoreTime(new Date().toLocaleTimeString())
      action('BFCache 恢复')({
        persisted: event.persisted,
        timeStamp: event.timeStamp,
        message: '页面从 BFCache 恢复成功！',
      })
    })

    action('监听已启动')('等待 BFCache 恢复事件...')

    return () => {
      stop()
    }
  }, [])

  const handleNavigateAway = () => {
    // 使用顶层窗口导航，确保真正离开页面
    const targetWindow = window.top || window
    targetWindow.location.href = 'https://www.baidu.com'
  }

  return (
    <div>
      <div className="button" onClick={handleNavigateAway}>
        离开页面（测试 BFCache）
      </div>

      <div
        style={{
          marginTop: 20,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
          maxWidth: 400,
        }}
      >
        <p>
          <strong>监听状态:</strong>{' '}
          <span style={{ color: '#52c41a' }}>● 监听中</span>
        </p>
        <p>
          <strong>恢复次数:</strong> {restoreCount}
        </p>
        {lastRestoreTime && (
          <p>
            <strong>上次恢复:</strong> {lastRestoreTime}
          </p>
        )}

        <div
          style={{
            marginTop: 16,
            padding: 12,
            background: '#fff7e6',
            border: '1px solid #ffd591',
            borderRadius: 4,
            fontSize: 13,
          }}
        >
          <p style={{ margin: 0, fontWeight: 'bold', color: '#d46b08' }}>
            ⚠️ 测试说明
          </p>
          <ol style={{ margin: '8px 0 0', paddingLeft: 20, color: '#666' }}>
            <li>点击"离开页面"将跳转到外部网站</li>
            <li>等待新页面加载完成</li>
            <li>
              点击浏览器的<strong>后退按钮</strong>返回
            </li>
            <li>如果 BFCache 生效，恢复次数会 +1</li>
          </ol>
          <p style={{ margin: '8px 0 0', fontSize: 12, color: '#999' }}>
            注：BFCache 是否生效取决于浏览器策略，Chrome/Safari 支持较好。
          </p>
        </div>
      </div>
    </div>
  )
}

export default OnBFCacheRestoreDemo
