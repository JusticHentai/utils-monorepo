import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import normalDemo from './normalDemo'

const parseTimeDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        解析当前时间
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default parseTimeDemo
