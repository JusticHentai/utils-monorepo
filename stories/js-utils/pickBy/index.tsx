import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import pickByDemo from './pickByDemo'

const PickByDemo = () => {
  return (
    <div>
      <div className="button" onClick={pickByDemo}>
        条件选择
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PickByDemo
