import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toStringValueDemo from './toStringValueDemo'

const ToStringValueDemo = () => {
  return (
    <div>
      <div className="button" onClick={toStringValueDemo}>
        将 value 转换为字符串
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToStringValueDemo
