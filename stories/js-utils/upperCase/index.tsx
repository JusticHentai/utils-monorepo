import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import upperCaseDemo from './upperCaseDemo'

const UpperCaseDemo = () => {
  return (
    <div>
      <div className="button" onClick={upperCaseDemo}>
        转换字符串为大写形式，以空格分隔
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UpperCaseDemo
