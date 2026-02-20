import { useEffect, useRef } from 'react'
import useRafState from '../../../packages/element-utils/src/useRafState'

/**
 * 基础用法示例
 * 展示 useRafState 在高频更新场景的使用
 */
const BasicDemo = () => {
  const [position, setPosition] = useRafState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const container = containerRef.current
    container?.addEventListener('mousemove', handleMouseMove)

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px',
      }}
    >
      <h3>基础用法</h3>
      <div
        ref={containerRef}
        style={{
          width: '400px',
          height: '200px',
          backgroundColor: '#f5f5f5',
          position: 'relative',
          borderRadius: '4px',
          cursor: 'crosshair',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            width: '10px',
            height: '10px',
            backgroundColor: '#1890ff',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />
      </div>
      <p style={{ marginTop: '16px' }}>
        位置: x={position.x.toFixed(0)}, y={position.y.toFixed(0)}
      </p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        说明：在区域内移动鼠标，状态在 RAF 中更新，避免过于频繁的渲染
      </p>
    </div>
  )
}

export default BasicDemo
