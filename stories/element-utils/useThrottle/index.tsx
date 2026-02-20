import '../../.css/index.css'
import useBasicDemo from './basicDemo.tsx'
import useTrailingDemo from './trailingDemo.tsx'

const UseThrottleDemo = () => {
  const { trigger, cancelThrottle, flushThrottle, checkPending } =
    useBasicDemo()
  const { trigger: triggerTrailing, cancelThrottle: cancelTrailing } =
    useTrailingDemo()

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础节流</div>
      <div className="button" onClick={trigger}>
        触发节流（立即执行）
      </div>
      <div className="button" onClick={cancelThrottle}>
        取消节流
      </div>
      <div className="button" onClick={flushThrottle}>
        立即执行
      </div>
      <div className="button" onClick={checkPending}>
        检查是否节流中
      </div>
      <div style={{ margin: '16px 0', fontWeight: 'bold' }}>仅结束时执行</div>
      <div className="button" onClick={triggerTrailing}>
        触发节流（结束时执行）
      </div>
      <div className="button" onClick={cancelTrailing}>
        取消节流
      </div>
    </div>
  )
}

export default UseThrottleDemo
