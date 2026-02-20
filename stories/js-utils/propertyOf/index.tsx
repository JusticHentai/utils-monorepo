import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import propertyOfDemo from './propertyOfDemo'

const PropertyOfDemo = () => {
  return (
    <div>
      <div className="button" onClick={propertyOfDemo}>
        与 property 相反，创建一个函数，返回给定路径在指定对象上的值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PropertyOfDemo
