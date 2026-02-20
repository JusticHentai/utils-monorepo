import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isSetDemo from './isSetDemo'

const IsSetDemo = () => {
  return (
    <div>
      <div className="button" onClick={isSetDemo}>
        检查 value 是否是 Set 对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsSetDemo
