import '../../.css/index.css'
import mapArrayDemo from './mapArrayDemo'
import mapObjectDemo from './mapObjectDemo'

const MapDemo = () => {
  return (
    <div>
      <div className="button" onClick={mapArrayDemo}>
        数组映射
      </div>
      <div className="button" onClick={mapObjectDemo}>
        对象映射
      </div>
    </div>
  )
}

export default MapDemo
