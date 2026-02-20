import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import rangeRightDemo from './rangeRightDemo'

const RangeRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={rangeRightDemo}>
        类似于 range，但是按降序填充数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default RangeRightDemo
