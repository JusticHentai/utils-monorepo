import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toSafeIntegerDemo from './toSafeIntegerDemo'

const ToSafeIntegerDemo = () => {
  return (
    <div>
      <div className="button" onClick={toSafeIntegerDemo}>
        将 value 转换为安全整数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToSafeIntegerDemo
