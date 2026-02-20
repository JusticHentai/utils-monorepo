import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const CompactDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        移除假值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default CompactDemo
