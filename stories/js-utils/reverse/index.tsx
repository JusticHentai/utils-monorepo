import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import reverseDemo from './reverseDemo'

const ReverseDemo = () => {
  return (
    <div>
      <div className="button" onClick={reverseDemo}>
        反转数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ReverseDemo
