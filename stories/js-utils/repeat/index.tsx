import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import repeatDemo from './repeatDemo'

const RepeatDemo = () => {
  return (
    <div>
      <div className="button" onClick={repeatDemo}>
        重复字符串
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default RepeatDemo
