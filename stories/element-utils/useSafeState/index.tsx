import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useSafeState 示例集合
 */
const UseSafeStateDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useSafeState - 安全状态</h2>
      <p>安全的 useState，组件卸载后不再更新 state，避免内存泄漏警告</p>
      <BasicDemo />
    </div>
  )
}

export default UseSafeStateDemo
