import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import padStartDemo from './padStartDemo'

const PadStartDemo = () => {
  return (
    <div>
      <div className="button" onClick={padStartDemo}>
        如果字符串长度小于 length，则在左侧填充字符
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PadStartDemo
