import { useState } from 'react'
import useSafeState from '../../../packages/element-utils/src/useSafeState'

/**
 * 模拟异步数据获取的子组件
 */
const AsyncComponent = () => {
  const [data, setData] = useSafeState<string | null>(null)
  const [loading, setLoading] = useSafeState(true)

  // 模拟异步请求
  useState(() => {
    const timer = setTimeout(() => {
      setData('数据加载完成！')
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  })

  if (loading) {
    return <div style={{ color: '#1890ff' }}>加载中...</div>
  }

  return <div style={{ color: '#52c41a' }}>{data}</div>
}

/**
 * 基础用法示例
 * 展示 useSafeState 在异步场景的使用
 */
const BasicDemo = () => {
  const [show, setShow] = useState(true)

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px',
        minWidth: '400px',
      }}
    >
      <h3>基础用法</h3>
      <p style={{ fontSize: '12px', color: '#666' }}>
        说明：点击隐藏按钮在数据加载完成前卸载组件，不会出现内存泄漏警告
      </p>
      <div style={{ marginBottom: '16px' }}>
        <button
          onClick={() => setShow(!show)}
          style={{
            padding: '8px 16px',
            backgroundColor: show ? '#ff4d4f' : '#52c41a',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {show ? '隐藏组件' : '显示组件'}
        </button>
      </div>
      <div
        style={{
          padding: '16px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          minHeight: '50px',
        }}
      >
        {show ? <AsyncComponent /> : <div style={{ color: '#999' }}>组件已卸载</div>}
      </div>
      <div
        style={{
          marginTop: '16px',
          padding: '12px',
          backgroundColor: '#fff7e6',
          borderRadius: '4px',
          border: '1px solid #ffd591',
        }}
      >
        <p style={{ margin: 0, fontSize: '12px' }}>
          💡 提示：在数据加载完成（2秒）前点击隐藏，使用普通 useState 可能会出现
          "Can't perform a React state update on an unmounted component" 警告，
          而 useSafeState 会安全地忽略这次更新。
        </p>
      </div>
    </div>
  )
}

export default BasicDemo
