import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isDateDemo from './isDateDemo'

const IsDateDemo = () => {
  return (
    <div>
      <div className="button" onClick={isDateDemo}>
        检查 value 是否是 Date 对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsDateDemo
