import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import assignWithDemo from './assignWithDemo'

const AssignWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={assignWithDemo}>
        类似于 assign，但可以自定义分配逻辑
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default AssignWithDemo
