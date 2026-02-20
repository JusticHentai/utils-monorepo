import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import floorDemo from './floorDemo'

const FloorDemo = () => {
  return (
    <div>
      <div className="button" onClick={floorDemo}>
        根据精度向下舍入数值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FloorDemo
