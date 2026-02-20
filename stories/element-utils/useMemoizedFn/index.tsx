import { memo, useCallback, useState } from 'react'
import { action } from 'storybook/actions'
import useMemoizedFn from '../../../packages/element-utils/src/useMemoizedFn'
import '../../.css/index.css'

// 子组件，用于演示渲染次数
const ChildComponent = memo(
  ({ onClick, label }: { onClick: () => void; label: string }) => {
    action('子组件渲染')(label)
    return (
      <div
        onClick={onClick}
        style={{
          padding: '8px 16px',
          background: '#f0f0f0',
          borderRadius: 4,
          cursor: 'pointer',
          marginBottom: 8,
        }}
      >
        {label}
      </div>
    )
  }
)

const UseMemoizedFnDemo = () => {
  const [count, setCount] = useState(0)

  // 普通 useCallback（count 变化时会重新创建）
  const normalCallback = useCallback(() => {
    action('普通 callback')(count)
  }, [count])

  // useMemoizedFn（引用永远不变）
  const memoizedCallback = useMemoizedFn(() => {
    action('memoized callback')(count)
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>持久化函数</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        useMemoizedFn 返回的函数引用永远不变，可以避免子组件重新渲染：
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
          count: <span style={{ color: '#1890ff' }}>{count}</span>
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          setCount((c) => c + 1)
        }}
      >
        增加 count（触发重新渲染）
      </div>

      <div style={{ margin: '24px 0 16px', fontWeight: 'bold' }}>子组件</div>
      <div style={{ marginBottom: 8, color: '#666', fontSize: 12 }}>
        查看 Actions 面板观察子组件渲染情况：
      </div>

      <ChildComponent
        onClick={normalCallback}
        label="普通 callback（count 变化时重新渲染）"
      />
      <ChildComponent
        onClick={memoizedCallback}
        label="memoized callback（不会重新渲染）"
      />

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：增加 count 时，使用普通 callback 的子组件会重新渲染，使用 memoized
        callback 的不会
      </div>
    </div>
  )
}

export default UseMemoizedFnDemo
