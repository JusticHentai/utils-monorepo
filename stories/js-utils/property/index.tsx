import '../../.css/index.css'
import propertyDemo from './propertyDemo'
import propertyOfDemo from './propertyOfDemo'

const PropertyDemo = () => {
  return (
    <div>
      <div className="button" onClick={propertyDemo}>
        property 提取
      </div>
      <div className="button" onClick={propertyOfDemo}>
        propertyOf
      </div>
    </div>
  )
}

export default PropertyDemo
