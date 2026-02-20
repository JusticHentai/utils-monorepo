import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import escapeRegExpDemo from './escapeRegExpDemo'

const EscapeRegExpDemo = () => {
  return (
    <div>
      <div className="button" onClick={escapeRegExpDemo}>
        转义 RegExp 特殊字符
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default EscapeRegExpDemo
