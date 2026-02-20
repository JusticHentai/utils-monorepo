import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toLengthDemo from './toLengthDemo'

const ToLengthDemo = () => {
  return (
    <div>
      <div className="button" onClick={toLengthDemo}>
        将 value 转换为适合用作类数组长度的整数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToLengthDemo
