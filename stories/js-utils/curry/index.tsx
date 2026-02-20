import '../../.css/index.css'
import curryDemo from './curryDemo'
import edgeCaseDemo from './edgeCaseDemo'

const CurryDemo = () => {
  return (
    <div>
      <div className="button" onClick={curryDemo}>
        curry - 柯里化
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        curry - 边界情况
      </div>
    </div>
  )
}

export default CurryDemo
