import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import roundDemo from './roundDemo'

const RoundDemo = () => {
  return (
    <div>
      <div className="button" onClick={roundDemo}>
        舍入操作
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default RoundDemo
