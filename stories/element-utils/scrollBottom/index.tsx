import { useRef } from 'react'
import '../../.css/index.css'
import { initBasicDemo, removeBasicDemo } from './basicDemo'
import { initThresholdDemo, removeThresholdDemo } from './thresholdDemo'
import { initThrottleDemo, removeThrottleDemo } from './throttleDemo'

const ScrollBottomDemo = () => {
  const basicRef = useRef<HTMLDivElement>(null)
  const thresholdRef = useRef<HTMLDivElement>(null)
  const throttleRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8 }}>基础滚动监听</div>
        <div
          ref={basicRef}
          style={{
            width: 200,
            height: 150,
            overflow: 'auto',
            border: '1px solid #ccc',
            borderRadius: 4,
            marginBottom: 8,
          }}
        >
          <div style={{ height: 400, padding: 8 }}>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} style={{ padding: '4px 0' }}>
                内容行 {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div
          className="button"
          onClick={() => basicRef.current && initBasicDemo(basicRef.current)}
        >
          添加滚动监听
        </div>
        <div className="button" onClick={removeBasicDemo}>
          移除滚动监听
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>带阈值监听（50px）</div>
        <div
          ref={thresholdRef}
          style={{
            width: 200,
            height: 150,
            overflow: 'auto',
            border: '1px solid #ccc',
            borderRadius: 4,
            marginBottom: 8,
          }}
        >
          <div style={{ height: 400, padding: 8 }}>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} style={{ padding: '4px 0' }}>
                内容行 {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div
          className="button"
          onClick={() =>
            thresholdRef.current && initThresholdDemo(thresholdRef.current)
          }
        >
          添加滚动监听（阈值 50px）
        </div>
        <div className="button" onClick={removeThresholdDemo}>
          移除滚动监听
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>带节流监听（100ms）</div>
        <div
          ref={throttleRef}
          style={{
            width: 200,
            height: 150,
            overflow: 'auto',
            border: '1px solid #ccc',
            borderRadius: 4,
            marginBottom: 8,
          }}
        >
          <div style={{ height: 400, padding: 8 }}>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} style={{ padding: '4px 0' }}>
                内容行 {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div
          className="button"
          onClick={() =>
            throttleRef.current && initThrottleDemo(throttleRef.current)
          }
        >
          添加滚动监听（节流 100ms）
        </div>
        <div className="button" onClick={removeThrottleDemo}>
          移除滚动监听
        </div>
      </div>
    </div>
  )
}

export default ScrollBottomDemo
