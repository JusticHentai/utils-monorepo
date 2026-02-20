import { useEffect, useRef, useState } from 'react'
import { action } from 'storybook/actions'
import onHeightChange from '../../../packages/element-utils/src/onHeightChange'
import '../../.css/index.css'

const OnHeightChangeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [height, setHeight] = useState(150)

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const stop = onHeightChange(
      containerRef.current,
      (newHeight, prevHeight) => {
        setHeight(Math.round(newHeight))
        action('高度变化')({
          前值: Math.round(prevHeight),
          现值: Math.round(newHeight),
          变化量: Math.round(newHeight - prevHeight),
        })
      },
      { threshold: 5, delay: 50 }
    )

    action('初始化成功')('拖动下边框调整高度，阈值 5px，变化小于 5px 不触发')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setHeight(150)
  }

  const handleCleanup = () => {
    setInited(false)
    setHeight(150)
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

      {/* 演示区域 */}
      {inited && (
        <div style={{ marginTop: 40 }}>
          <div
            ref={containerRef}
            style={{
              width: 200,
              height: 150,
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              borderRadius: 8,
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              resize: 'vertical',
              overflow: 'auto',
              minHeight: 100,
              maxHeight: 400,
            }}
          >
            <div>拖动调整高度</div>
            <div>高度: {height}px</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OnHeightChangeDemo
