import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import onceDemo from './onceDemo'

const OnceDemo = () => {
  return (
    <div>
      <div className="button" onClick={onceDemo}>
        单次调用
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default OnceDemo
