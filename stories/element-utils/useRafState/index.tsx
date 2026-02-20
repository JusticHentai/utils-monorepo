import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useRafState 示例集合
 */
const UseRafStateDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useRafState - RAF 状态</h2>
      <p>在 requestAnimationFrame 中更新 state，适合高频更新场景</p>
      <BasicDemo />
    </div>
  )
}

export default UseRafStateDemo
