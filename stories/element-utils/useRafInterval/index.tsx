import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useRafInterval 示例集合
 */
const UseRafIntervalDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useRafInterval - RAF 定时器</h2>
      <p>使用 requestAnimationFrame 实现的定时器，更加流畅</p>
      <BasicDemo />
    </div>
  )
}

export default UseRafIntervalDemo
