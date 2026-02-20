import '../../.css/index.css'
import { useState } from 'react'
import useMount from '../../../packages/element-utils/src/useMount'
import { action } from 'storybook/actions'

const MountableComponent = () => {
  useMount(() => {
    action('useMount')('组件已挂载')
  })

  return (
    <div
      style={{
        padding: 16,
        background: 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)',
        borderRadius: 8,
        color: 'white',
        textAlign: 'center',
      }}
    >
      我是可挂载的组件
    </div>
  )
}

const UseMountDemo = () => {
  const [mounted, setMounted] = useState(false)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>组件挂载</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        useMount 在组件挂载时执行一次回调：
      </div>

      <div
        className="button"
        onClick={() => {
          setMounted(!mounted)
          action(mounted ? '卸载组件' : '挂载组件')('')
        }}
      >
        {mounted ? '卸载组件' : '挂载组件'}
      </div>

      <div style={{ marginTop: 16 }}>
        {mounted ? (
          <MountableComponent />
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
            组件未挂载
          </div>
        )}
      </div>

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：点击挂载组件后，查看 Actions 面板可以看到 useMount 回调
      </div>
    </div>
  )
}

export default UseMountDemo
