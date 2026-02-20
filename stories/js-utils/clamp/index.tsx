import '../../.css/index.css'
import basicDemo from './basicDemo'
import edgeCaseDemo from './edgeCaseDemo'

const ClampDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        clamp - 基础范围限制
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况
      </div>
    </div>
  )
}

export default ClampDemo
