import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import unescapeDemo from './unescapeDemo'

const UnescapeDemo = () => {
  return (
    <div>
      <div className="button" onClick={unescapeDemo}>
        反转义 HTML 实体
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UnescapeDemo
