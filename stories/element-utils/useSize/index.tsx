import '../../.css/index.css'
import { useRef } from 'react'
import useSize from '../../../packages/element-utils/src/useSize'

const UseSizeDemo = () => {
  const ref = useRef<HTMLDivElement>(null)
  const size = useSize(ref)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>元素尺寸监听</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        拖拽下方元素右下角调整大小：
      </div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div>
          width: <span style={{ color: '#1890ff' }}>{size?.width ?? 0}px</span>
        </div>
        <div>
          height: <span style={{ color: '#52c41a' }}>{size?.height ?? 0}px</span>
        </div>
      </div>

      <div
        ref={ref}
        style={{
          width: 200,
          height: 150,
          resize: 'both',
          overflow: 'auto',
          minWidth: 100,
          minHeight: 100,
          maxWidth: 400,
          maxHeight: 300,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        拖拽调整大小
      </div>

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：useSize 使用 ResizeObserver API 监听元素尺寸变化
      </div>
    </div>
  )
}

export default UseSizeDemo
