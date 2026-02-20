import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import curryRightDemo from './curryRightDemo'

const CurryRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={curryRightDemo}>
        类似 curry，但从右向左接受参数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default CurryRightDemo
