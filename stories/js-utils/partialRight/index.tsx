import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import partialRightDemo from './partialRightDemo'

const PartialRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={partialRightDemo}>
        类似于 partial，但从右侧预设参数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PartialRightDemo
