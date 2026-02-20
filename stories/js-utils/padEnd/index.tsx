import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import padEndDemo from './padEndDemo'

const PadEndDemo = () => {
  return (
    <div>
      <div className="button" onClick={padEndDemo}>
        如果字符串长度小于 length，则在右侧填充字符
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PadEndDemo
