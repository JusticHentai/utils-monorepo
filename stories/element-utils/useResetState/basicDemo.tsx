import useResetState from '../../../packages/element-utils/src/useResetState'

/**
 * 基础用法示例
 * 展示 useResetState 的重置功能
 */
const BasicDemo = () => {
  const [state, setState, resetState] = useResetState({
    name: '',
    email: '',
    age: 0,
  })

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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>姓名:</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            placeholder="请输入姓名"
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>邮箱:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            placeholder="请输入邮箱"
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>年龄:</label>
          <input
            type="number"
            value={state.age}
            onChange={(e) => setState({ ...state, age: Number(e.target.value) })}
            placeholder="请输入年龄"
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: '16px' }}>
        <button
          onClick={resetState}
          style={{
            padding: '8px 24px',
            backgroundColor: '#ff4d4f',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          重置表单
        </button>
      </div>
      <div
        style={{
          marginTop: '16px',
          padding: '12px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px' }}>
          当前状态: {JSON.stringify(state, null, 2)}
        </p>
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
        说明：点击重置按钮可以将表单恢复到初始状态
      </p>
    </div>
  )
}

export default BasicDemo
