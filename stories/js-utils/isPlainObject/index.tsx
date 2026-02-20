import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isPlainObjectDemo from './isPlainObjectDemo'

const IsPlainObjectDemo = () => {
  return (
    <div>
      <div className="button" onClick={isPlainObjectDemo}>
        类型检测
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsPlainObjectDemo
