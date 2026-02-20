import '../../.css/index.css'
import mapKeysDemo from './mapKeysDemo'
import mapValuesDemo from './mapValuesDemo'

const MapKeysDemo = () => {
  return (
    <div>
      <div className="button" onClick={mapKeysDemo}>
        mapKeys 转换键
      </div>
      <div className="button" onClick={mapValuesDemo}>
        mapValues 转换值
      </div>
    </div>
  )
}

export default MapKeysDemo
