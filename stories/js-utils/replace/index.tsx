import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import replaceDemo from './replaceDemo'

const ReplaceDemo = () => {
  return (
    <div>
      <div className="button" onClick={replaceDemo}>
        字符串替换
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ReplaceDemo
