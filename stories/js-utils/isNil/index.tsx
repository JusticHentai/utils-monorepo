import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isNilDemo from './isNilDemo'

const IsNilDemo = () => {
  return (
    <div>
      <div className="button" onClick={isNilDemo}>
        空值检测
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsNilDemo
