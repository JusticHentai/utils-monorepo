import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import assignInDemo from './assignInDemo'

const AssignInDemo = () => {
  return (
    <div>
      <div className="button" onClick={assignInDemo}>
        类似于 assign，但包括继承的属性
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default AssignInDemo
