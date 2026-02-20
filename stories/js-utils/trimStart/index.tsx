import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import trimStartDemo from './trimStartDemo'

const TrimStartDemo = () => {
  return (
    <div>
      <div className="button" onClick={trimStartDemo}>
        从字符串开头移除空白字符或指定字符
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TrimStartDemo
