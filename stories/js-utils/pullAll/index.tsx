import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import pullAllDemo from './pullAllDemo'

const PullAllDemo = () => {
  return (
    <div>
      <div className="button" onClick={pullAllDemo}>
        类似于 pull，但接受一个值数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PullAllDemo
