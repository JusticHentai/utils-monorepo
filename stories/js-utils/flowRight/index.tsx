import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import flowRightDemo from './flowRightDemo'

const FlowRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={flowRightDemo}>
        创建一个函数，从右到左依次调用函数数组中的函数（类似函数组合 compose）
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FlowRightDemo
