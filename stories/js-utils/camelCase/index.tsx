import '../../.css/index.css'
import basicDemo from './basicDemo'
import numberAndAcronymDemo from './numberAndAcronymDemo'

const CamelCaseDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        camelCase - 基础转换
      </div>
      <div className="button" onClick={numberAndAcronymDemo}>
        数字与缩略词处理
      </div>
    </div>
  )
}

export default CamelCaseDemo
