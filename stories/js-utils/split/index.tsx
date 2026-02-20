import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import splitDemo from './splitDemo'

const SplitDemo = () => {
  return (
    <div>
      <div className="button" onClick={splitDemo}>
        拆分字符串
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SplitDemo
