import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isIntegerDemo from './isIntegerDemo'

const IsIntegerDemo = () => {
  return (
    <div>
      <div className="button" onClick={isIntegerDemo}>
        检查 value 是否是整数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsIntegerDemo
