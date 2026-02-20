import '../../.css/index.css'
import useCounter from '../../../packages/element-utils/src/useCounter'
import { action } from 'storybook/actions'

const UseCounterDemo = () => {
  // 基础用法
  const [count, { inc, dec, set, reset }] = useCounter(0)
  // 带边界值
  const [limitedCount, limitedActions] = useCounter(5, { min: 0, max: 10 })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础计数器</div>
      <div style={{ marginBottom: 8, fontSize: 24 }}>
        计数：<span style={{ color: '#1890ff' }}>{count}</span>
      </div>
      <div
        className="button"
        onClick={() => {
          inc()
          action('inc()')('增加 1')
        }}
      >
        inc() +1
      </div>
      <div
        className="button"
        onClick={() => {
          dec()
          action('dec()')('减少 1')
        }}
      >
        dec() -1
      </div>
      <div
        className="button"
        onClick={() => {
          inc(5)
          action('inc(5)')('增加 5')
        }}
      >
        inc(5) +5
      </div>
      <div
        className="button"
        onClick={() => {
          dec(5)
          action('dec(5)')('减少 5')
        }}
      >
        dec(5) -5
      </div>
      <div
        className="button"
        onClick={() => {
          set(100)
          action('set(100)')('设置为 100')
        }}
      >
        set(100)
      </div>
      <div
        className="button"
        onClick={() => {
          reset()
          action('reset()')('重置为初始值')
        }}
      >
        reset()
      </div>

      <div style={{ margin: '24px 0 16px', fontWeight: 'bold' }}>
        带边界值计数器 (min: 0, max: 10)
      </div>
      <div style={{ marginBottom: 8, fontSize: 24 }}>
        计数：<span style={{ color: '#52c41a' }}>{limitedCount}</span>
        <span style={{ fontSize: 14, color: '#999', marginLeft: 8 }}>
          [min: 0, max: 10]
        </span>
      </div>
      <div
        className="button"
        onClick={() => {
          limitedActions.inc()
          action('limited inc()')('增加 1（最大 10）')
        }}
      >
        inc() +1
      </div>
      <div
        className="button"
        onClick={() => {
          limitedActions.dec()
          action('limited dec()')('减少 1（最小 0）')
        }}
      >
        dec() -1
      </div>
      <div
        className="button"
        onClick={() => {
          limitedActions.set(5)
          action('limited set(5)')('设置为 5')
        }}
      >
        set(5)
      </div>
      <div
        className="button"
        onClick={() => {
          limitedActions.reset()
          action('limited reset()')('重置为初始值 5')
        }}
      >
        reset()
      </div>
    </div>
  )
}

export default UseCounterDemo
