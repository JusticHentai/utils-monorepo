import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isMapDemo from './isMapDemo'

const IsMapDemo = () => {
  return (
    <div>
      <div className="button" onClick={isMapDemo}>
        检查 value 是否是 Map 对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsMapDemo
