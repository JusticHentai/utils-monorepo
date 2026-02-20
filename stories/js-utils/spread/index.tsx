import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import spreadDemo from './spreadDemo'

const SpreadDemo = () => {
  return (
    <div>
      <div className="button" onClick={spreadDemo}>
        创建一个函数，将数组参数展开传递给原函数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SpreadDemo
