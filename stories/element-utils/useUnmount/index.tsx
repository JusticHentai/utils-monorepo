import '../../.css/index.css'
import { useState } from 'react'
import useUnmount from '../../../packages/element-utils/src/useUnmount'
import { action } from 'storybook/actions'

const UnmountableComponent = () => {
  useUnmount(() => {
    action('useUnmount')('组件已卸载')
  })

  return (
    <div
      style={{
        padding: 16,
        background: 'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)',
        borderRadius: 8,
        color: 'white',
        textAlign: 'center',
      }}
    >
      我是可卸载的组件
    </div>
  )
}

const UseUnmountDemo = () => {
  const [mounted, setMounted] = useState(true)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>组件卸载</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        useUnmount 在组件卸载时执行回调：
      </div>

      <div
        className="button"
        onClick={() => {
          setMounted(!mounted)
          action(mounted ? '即将卸载组件' : '挂载组件')('')
        }}
      >
        {mounted ? '卸载组件' : '挂载组件'}
      </div>

      <div style={{ marginTop: 16 }}>
        {mounted ? (
          <UnmountableComponent />
        ) : (
          <div
            style={{
              padding: 16,
              background: '#f5f5f5',
              borderRadius: 8,
              textAlign: 'center',
              color: '#999',
            }}
          >
            组件已卸载
          </div>
        )}
      </div>

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：点击卸载组件后，查看 Actions 面板可以看到 useUnmount 回调
      </div>
    </div>
  )
}

export default UseUnmountDemo
