import '../../.css/index.css'
import flowDemo from './flowDemo'
import flowRightDemo from './flowRightDemo'

const FlowDemo = () => {
  return (
    <div>
      <div className="button" onClick={flowDemo}>
        flow - 从左到右组合
      </div>
      <div className="button" onClick={flowRightDemo}>
        flowRight - 从右到左组合
      </div>
    </div>
  )
}

export default FlowDemo
