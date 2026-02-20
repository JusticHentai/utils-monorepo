import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isNaNValueDemo from './isNaNValueDemo'

const IsNaNValueDemo = () => {
  return (
    <div>
      <div className="button" onClick={isNaNValueDemo}>
        检查 value 是否是 NaN
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsNaNValueDemo
