import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isNullDemo from './isNullDemo'

const IsNullDemo = () => {
  return (
    <div>
      <div className="button" onClick={isNullDemo}>
        检查 value 是否是 null
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsNullDemo
