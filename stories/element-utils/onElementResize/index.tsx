import '../../.css/index.css'
import { useEffect, useRef, useState } from 'react'
import onElementResize from '../../../packages/element-utils/src/onElementResize'
import { action } from 'storybook/actions'

const OnElementResizeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [size, setSize] = useState({ width: 200, height: 150 })

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const stop = onElementResize(
      containerRef.current,
      ({ width, height }) => {
        setSize({ width: Math.round(width), height: Math.round(height) })
        action('尺寸变化')({
          宽度: Math.round(width),
          高度: Math.round(height),
        })
      },
      100
    )

    action('初始化成功')('拖动元素右下角调整大小，设置 100ms 防抖')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setSize({ width: 200, height: 150 })
  }

  const handleCleanup = () => {
    setInited(false)
    setSize({ width: 200, height: 150 })
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
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              resize: 'both',
              overflow: 'auto',
              minWidth: 150,
              minHeight: 100,
            }}
          >
            <div>拖动右下角调整大小</div>
            <div>{size.width} x {size.height}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OnElementResizeDemo
