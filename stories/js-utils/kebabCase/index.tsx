import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const KebabCaseDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        转换为短横线命名
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default KebabCaseDemo
