import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import startCaseDemo from './startCaseDemo'

const StartCaseDemo = () => {
  return (
    <div>
      <div className="button" onClick={startCaseDemo}>
        转换字符串为 Start Case（每个单词首字母大写）
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default StartCaseDemo
