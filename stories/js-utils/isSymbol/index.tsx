import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isSymbolDemo from './isSymbolDemo'

const IsSymbolDemo = () => {
  return (
    <div>
      <div className="button" onClick={isSymbolDemo}>
        检查 value 是否是 Symbol
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsSymbolDemo
