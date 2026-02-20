import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import forOwnRightDemo from './forOwnRightDemo'

const ForOwnRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={forOwnRightDemo}>
        类似 forOwn，但从后向前遍历自有属性
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ForOwnRightDemo
