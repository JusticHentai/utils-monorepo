import '../../.css/index.css'
import BasicDemo from './basicDemo'

/**
 * useThrottleEffect 示例集合
 */
const UseThrottleEffectDemo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>useThrottleEffect - 节流 Effect</h2>
      <p>为 useEffect 增加节流能力</p>
      <BasicDemo />
    </div>
  )
}

export default UseThrottleEffectDemo
