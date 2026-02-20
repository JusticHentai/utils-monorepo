import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import assignInWithDemo from './assignInWithDemo'

const AssignInWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={assignInWithDemo}>
        类似于 assignIn，但可以自定义分配逻辑
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default AssignInWithDemo
