import { useEffect, useRef, useState } from 'react'
import { action } from 'storybook/actions'
import onLeaveViewport from '../../../packages/element-utils/src/onLeaveViewport'
import '../../.css/index.css'

const OnLeaveViewportDemo = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    if (!inited || !targetRef.current) return

    const stop = onLeaveViewport(
      targetRef.current,
      () => {
        action('元素离开视口')('触发回调，观察器已自动停止')
        setTriggered(true)
      },
      { root: containerRef.current }
    )

    action('初始化成功')('向下滚动容器使绿色元素离开视口')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setTriggered(false)
    // 重置滚动位置
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
  }

  const handleCleanup = () => {
    setInited(false)
    setTriggered(false)
    action('清理完成')()
  }

  return (
    <div>
      <div className="button" onClick={handleInit}>
        初始化示例
      </div>
      <div className="button" onClick={handleCleanup}>
        清理示例
      </div>

      {/* 演示区域 - 可滚动容器 */}
      {inited && (
        <div
          ref={containerRef}
          style={{
            marginTop: 40,
            width: 300,
            height: 200,
            overflowY: 'auto',
            background: '#f5f5f5',
            borderRadius: 8,
            padding: 16,
          }}
        >
          {/* 目标元素 */}
          <div
            ref={targetRef}
            style={{
              width: '100%',
              height: 80,
              background: triggered
                ? '#ff6b6b'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {triggered ? '已离开视口!' : '目标元素 - 向下滚动'}
          </div>

          {/* 占位内容，用于产生滚动 */}
          <div
            style={{
              marginTop: 16,
              height: 400,
              background: '#e0e0e0',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
            }}
          >
            ↑ 向上滚动使目标元素离开视口
          </div>
        </div>
      )}
    </div>
  )
}

export default OnLeaveViewportDemo
