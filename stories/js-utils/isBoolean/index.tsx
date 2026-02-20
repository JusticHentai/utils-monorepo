import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isBooleanDemo from './isBooleanDemo'

const IsBooleanDemo = () => {
  return (
    <div>
      <div className="button" onClick={isBooleanDemo}>
        检查 value 是否是布尔值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsBooleanDemo
