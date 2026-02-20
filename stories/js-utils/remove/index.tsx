import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import removeDemo from './removeDemo'

const RemoveDemo = () => {
  return (
    <div>
      <div className="button" onClick={removeDemo}>
        移除元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default RemoveDemo
