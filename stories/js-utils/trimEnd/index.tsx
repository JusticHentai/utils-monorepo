import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import trimEndDemo from './trimEndDemo'

const TrimEndDemo = () => {
  return (
    <div>
      <div className="button" onClick={trimEndDemo}>
        从字符串结尾移除空白字符或指定字符
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TrimEndDemo
