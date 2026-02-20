import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import forInRightDemo from './forInRightDemo'

const ForInRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={forInRightDemo}>
        类似 forIn，但从后向前遍历对象属性
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ForInRightDemo
