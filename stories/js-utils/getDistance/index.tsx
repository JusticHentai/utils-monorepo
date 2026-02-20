import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import normalDemo from './normalDemo'

const getDistanceDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        计算两点间距离
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default getDistanceDemo
