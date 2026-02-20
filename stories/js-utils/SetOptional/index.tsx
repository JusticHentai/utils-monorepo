import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import normalDemo from './normalDemo'

const SetOptionalDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        使用 SetOptional 类型
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SetOptionalDemo
