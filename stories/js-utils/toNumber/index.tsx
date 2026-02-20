import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toNumberDemo from './toNumberDemo'

const ToNumberDemo = () => {
  return (
    <div>
      <div className="button" onClick={toNumberDemo}>
        将 value 转换为数值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToNumberDemo
