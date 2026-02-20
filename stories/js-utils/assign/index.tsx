import '../../.css/index.css'
import assignDemo from './assignDemo'
import nullishDemo from './nullishDemo'

const AssignDemo = () => {
  return (
    <div>
      <div className="button" onClick={assignDemo}>
        assign - 基础合并与覆盖
      </div>
      <div className="button" onClick={nullishDemo}>
        nullish 值与字符串源
      </div>
    </div>
  )
}

export default AssignDemo
