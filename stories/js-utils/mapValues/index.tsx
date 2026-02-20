import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import mapValuesDemo from './mapValuesDemo'

const MapValuesDemo = () => {
  return (
    <div>
      <div className="button" onClick={mapValuesDemo}>
        创建一个对象，值是经过迭代器处理的值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default MapValuesDemo
