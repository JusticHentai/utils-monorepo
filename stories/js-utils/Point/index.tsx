import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import normalDemo from './normalDemo'

const PointDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        创建 Point 对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PointDemo
