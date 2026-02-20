import '../../.css/index.css'
import { useEffect } from 'react'
import useDocumentVisibility from '../../../packages/element-utils/src/useDocumentVisibility'
import { action } from 'storybook/actions'

const UseDocumentVisibilityDemo = () => {
  const visibility = useDocumentVisibility()

  useEffect(() => {
    action('页面可见性变化')(visibility)
  }, [visibility])

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>页面可见性</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        切换浏览器标签页观察可见性变化：
      </div>

      <div
        style={{
          marginBottom: 16,
          padding: 24,
          background:
            visibility === 'visible'
              ? 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
              : 'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)',
          borderRadius: 8,
          textAlign: 'center',
          color: 'white',
          transition: 'all 0.3s',
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 8 }}>
          {visibility === 'visible' ? '👁️' : '🙈'}
        </div>
        <div style={{ fontSize: 18, fontWeight: 'bold' }}>
          {visibility === 'visible' ? '页面可见' : '页面隐藏'}
        </div>
        <div style={{ marginTop: 8, opacity: 0.8 }}>
          visibilityState: {visibility}
        </div>
      </div>

      <div style={{ color: '#999', fontSize: 12 }}>
        <div>可见性状态说明：</div>
        <ul style={{ margin: '8px 0', paddingLeft: 20 }}>
          <li><code>visible</code> - 页面至少部分可见</li>
          <li><code>hidden</code> - 页面完全不可见</li>
          <li><code>prerender</code> - 页面正在预渲染</li>
        </ul>
        <div>提示：切换到其他标签页或最小化窗口可以看到状态变化</div>
      </div>
    </div>
  )
}

export default UseDocumentVisibilityDemo
