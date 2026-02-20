import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toFiniteDemo from './toFiniteDemo'

const ToFiniteDemo = () => {
  return (
    <div>
      <div className="button" onClick={toFiniteDemo}>
        将 value 转换为有限数值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToFiniteDemo
