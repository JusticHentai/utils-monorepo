import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sumDemo from './sumDemo'

const SumDemo = () => {
  return (
    <div>
      <div className="button" onClick={sumDemo}>
        求和
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SumDemo
