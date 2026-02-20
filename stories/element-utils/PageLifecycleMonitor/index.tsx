import '../../.css/index.css'
import basicDemo from './basicDemo'
import customHandlersDemo from './customHandlersDemo'

const PageLifecycleMonitorDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础生命周期监控
      </div>
      <div className="button" onClick={customHandlersDemo}>
        自定义事件处理器
      </div>
    </div>
  )
}

export default PageLifecycleMonitorDemo
