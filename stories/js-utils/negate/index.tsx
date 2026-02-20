import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import negateDemo from './negateDemo'

const NegateDemo = () => {
  return (
    <div>
      <div className="button" onClick={negateDemo}>
        取反谓词
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default NegateDemo
