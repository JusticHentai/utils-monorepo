import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const IndexOfDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        查找索引
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IndexOfDemo
