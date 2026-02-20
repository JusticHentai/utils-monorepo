import '../../.css/index.css'
import { initBasicDemo, removeBasicDemo } from './basicDemo'
import onceDemo from './onceDemo'

const VisibilityDemo = () => {
  return (
    <div>
      <div className="button" onClick={initBasicDemo}>
        添加可见性监听
      </div>
      <div className="button" onClick={removeBasicDemo}>
        移除可见性监听
      </div>
      <div className="button" onClick={onceDemo}>
        添加一次性监听（Safari 兼容）
      </div>
    </div>
  )
}

export default VisibilityDemo
