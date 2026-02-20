import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isLengthDemo from './isLengthDemo'

const IsLengthDemo = () => {
  return (
    <div>
      <div className="button" onClick={isLengthDemo}>
        检查 value 是否是有效的类数组长度
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsLengthDemo
