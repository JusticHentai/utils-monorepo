import '../../.css/index.css'
import addDemo from './addDemo'
import addImmediatelyDemo from './addImmediatelyDemo'
import autoProcessDemo from './autoProcessDemo'
import priorityDemo from './priorityDemo'

const ResourceControllerDemo = () => {
  return (
    <div>
      <div className="button" onClick={addDemo}>
        基础用法演示
      </div>
      <div className="button" onClick={addImmediatelyDemo}>
        立即加载演示
      </div>
      <div className="button" onClick={priorityDemo}>
        优先级队列演示
      </div>
      <div className="button" onClick={autoProcessDemo}>
        自动处理模式演示
      </div>
    </div>
  )
}

export default ResourceControllerDemo
