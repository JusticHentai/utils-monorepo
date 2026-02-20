import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import truncateDemo from './truncateDemo'

const TruncateDemo = () => {
  return (
    <div>
      <div className="button" onClick={truncateDemo}>
        字符串截断
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TruncateDemo
