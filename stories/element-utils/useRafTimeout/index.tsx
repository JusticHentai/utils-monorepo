import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useRafTimeout 示例集合
 */
const UseRafTimeoutDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useRafTimeout - RAF 延时</h2>
      <p>使用 requestAnimationFrame 实现的延时执行，更加流畅</p>
      <BasicDemo />
    </div>
  )
}

export default UseRafTimeoutDemo
