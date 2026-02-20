import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import normalDemo from './normalDemo'

const getPositionDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        行列转 2d 坐标系
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default getPositionDemo
