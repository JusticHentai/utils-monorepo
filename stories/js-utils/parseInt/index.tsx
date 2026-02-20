import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import parseIntDemo from './parseIntDemo'

const ParseIntDemo = () => {
  return (
    <div>
      <div className="button" onClick={parseIntDemo}>
        解析整数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ParseIntDemo
