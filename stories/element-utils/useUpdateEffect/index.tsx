import '../../.css/index.css'
import useBasicDemo from './basicDemo.tsx'
import useCleanupDemo from './cleanupDemo.tsx'

const UseUpdateEffectDemo = () => {
  const { count, increment, decrement } = useBasicDemo()
  const { value, changeValue } = useCleanupDemo()

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础用法</div>
      <div style={{ marginBottom: 8 }}>当前 count: {count}</div>
      <div className="button" onClick={increment}>
        count + 1
      </div>
      <div className="button" onClick={decrement}>
        count - 1
      </div>
      <div style={{ margin: '16px 0', fontWeight: 'bold' }}>带清理函数</div>
      <div style={{ marginBottom: 8 }}>当前 value: {value}</div>
      <div className="button" onClick={changeValue}>
        更新 value
      </div>
    </div>
  )
}

export default UseUpdateEffectDemo
