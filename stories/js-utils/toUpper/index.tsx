import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toUpperDemo from './toUpperDemo'

const ToUpperDemo = () => {
  return (
    <div>
      <div className="button" onClick={toUpperDemo}>
        转换字符串为全大写
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToUpperDemo
