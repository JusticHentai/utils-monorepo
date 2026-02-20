import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const IncludesDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检查包含关系
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IncludesDemo
