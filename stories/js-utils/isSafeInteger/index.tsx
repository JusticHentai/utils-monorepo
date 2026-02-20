import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isSafeIntegerDemo from './isSafeIntegerDemo'

const IsSafeIntegerDemo = () => {
  return (
    <div>
      <div className="button" onClick={isSafeIntegerDemo}>
        检查 value 是否是安全整数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsSafeIntegerDemo
