import '../../.css/index.css'
import useBasicDemo from './basicDemo.tsx'
import useImmediateDemo from './immediateDemo.tsx'

const UseDebounceDemo = () => {
  const { trigger, cancelDebounce, flushDebounce, checkPending } =
    useBasicDemo()
  const {
    trigger: triggerImmediate,
    cancelDebounce: cancelImmediateDebounce,
  } = useImmediateDemo()

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础防抖</div>
      <div className="button" onClick={trigger}>
        触发防抖（延迟执行）
      </div>
      <div className="button" onClick={cancelDebounce}>
        取消防抖
      </div>
      <div className="button" onClick={flushDebounce}>
        立即执行
      </div>
      <div className="button" onClick={checkPending}>
        检查是否等待中
      </div>
      <div style={{ margin: '16px 0', fontWeight: 'bold' }}>立即执行模式</div>
      <div className="button" onClick={triggerImmediate}>
        触发防抖（立即执行）
      </div>
      <div className="button" onClick={cancelImmediateDebounce}>
        取消防抖
      </div>
    </div>
  )
}

export default UseDebounceDemo
