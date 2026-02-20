import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toIntegerDemo from './toIntegerDemo'

const ToIntegerDemo = () => {
  return (
    <div>
      <div className="button" onClick={toIntegerDemo}>
        将 value 转换为整数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToIntegerDemo
