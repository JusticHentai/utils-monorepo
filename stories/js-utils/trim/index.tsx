import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import trimDemo from './trimDemo'

const TrimDemo = () => {
  return (
    <div>
      <div className="button" onClick={trimDemo}>
        修剪字符串
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TrimDemo
