import { useEffect, useRef, useState } from 'react'
import { action } from 'storybook/actions'
import onEnterViewport from '../../../packages/element-utils/src/onEnterViewport'
import '../../.css/index.css'

const OnEnterViewportDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (!targetRef.current || !containerRef.current) return

    const stop = onEnterViewport(
      targetRef.current,
      () => {
        action('元素进入视口')('触发回调，观察器自动停止')
        setTriggered(true)
      },
      { root: containerRef.current }
    )

    return () => {
      stop()
    }
  }, [key])

  const handleReset = () => {
    setTriggered(false)
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
    // 重新初始化观察器
    setKey((k) => k + 1)
  }

  return (
    <div>
      <p style={{ marginBottom: 16, color: '#666' }}>
        向下滚动容器，使目标元素进入视口，触发回调
      </p>

      <div className="button" onClick={handleReset}>
        重置演示
      </div>

      {/* 可滚动容器 */}
      <div
        ref={containerRef}
        style={{
          marginTop: 20,
          width: 300,
          height: 200,
          overflowY: 'auto',
          border: '2px solid #ddd',
          borderRadius: 8,
          position: 'relative',
        }}
      >
        {/* 顶部占位内容 */}
        <div
          style={{
            height: 250,
            background: 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
          }}
        >
          ↓ 向下滚动查看目标元素 ↓
        </div>

        {/* 目标元素 - 在容器底部 */}
        <div
          ref={targetRef}
          style={{
            height: 100,
            background: triggered
              ? 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          {triggered ? '已进入视口!' : '目标元素'}
        </div>
      </div>
    </div>
  )
}

export default OnEnterViewportDemo
