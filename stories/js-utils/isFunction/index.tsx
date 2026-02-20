import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import functionDemo from './functionDemo'

const IsFunctionDemo = () => {
  return (
    <div>
      <div className="button" onClick={functionDemo}>
        isFunction - 类型检测
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsFunctionDemo
