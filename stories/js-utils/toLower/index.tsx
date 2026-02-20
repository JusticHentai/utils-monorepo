import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toLowerDemo from './toLowerDemo'

const ToLowerDemo = () => {
  return (
    <div>
      <div className="button" onClick={toLowerDemo}>
        转换字符串为全小写
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToLowerDemo
