import '../../.css/index.css'
import { useEffect, useRef, useState } from 'react'
import onWidthChange from '../../../packages/element-utils/src/onWidthChange'
import { action } from 'storybook/actions'

const OnWidthChangeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [width, setWidth] = useState(200)

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const stop = onWidthChange(
      containerRef.current,
      (newWidth, prevWidth) => {
        setWidth(Math.round(newWidth))
        action('宽度变化')({
          前值: Math.round(prevWidth),
          现值: Math.round(newWidth),
          变化量: Math.round(newWidth - prevWidth),
        })
      },
      { threshold: 5, delay: 50 }
    )

    action('初始化成功')('拖动右边框调整宽度，阈值 5px，变化小于 5px 不触发')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setWidth(200)
  }

  const handleCleanup = () => {
    setInited(false)
    setWidth(200)
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
              height: 120,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              resize: 'horizontal',
              overflow: 'auto',
              minWidth: 120,
              maxWidth: 400,
            }}
          >
            <div>拖动调整宽度</div>
            <div>宽度: {width}px</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OnWidthChangeDemo
