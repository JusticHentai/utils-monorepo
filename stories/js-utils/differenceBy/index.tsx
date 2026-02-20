import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import differenceByDemo from './differenceByDemo'

const DifferenceByDemo = () => {
  return (
    <div>
      <div className="button" onClick={differenceByDemo}>
        类似 difference，但使用迭代器函数来决定比较标准
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default DifferenceByDemo
