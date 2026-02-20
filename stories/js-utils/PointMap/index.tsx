import '../../.css/index.css'
import { setDemo, getDemo } from './demo'

const PointMapDemo = () => {
  return (
    <div>
      <div className="button" onClick={setDemo}>
        设置坐标值
      </div>
      <div className="button" onClick={getDemo}>
        获取坐标值
      </div>
    </div>
  )
}

export default PointMapDemo
