import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import minDemo from './minDemo'

const MinDemo = () => {
  return (
    <div>
      <div className="button" onClick={minDemo}>
        计算数组中的最小值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default MinDemo
