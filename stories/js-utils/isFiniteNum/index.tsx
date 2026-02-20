import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isFiniteNumDemo from './isFiniteNumDemo'

const IsFiniteNumDemo = () => {
  return (
    <div>
      <div className="button" onClick={isFiniteNumDemo}>
        检查 value 是否是有限数值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsFiniteNumDemo
