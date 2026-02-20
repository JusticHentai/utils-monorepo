import '../../.css/index.css'
import basicDemo from './basicDemo'
import entryTypesDemo from './entryTypesDemo'

const SupportPerformanceObserverDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 PerformanceObserver 支持
      </div>
      <div className="button" onClick={entryTypesDemo}>
        获取支持的 Entry Types
      </div>
    </div>
  )
}

export default SupportPerformanceObserverDemo
