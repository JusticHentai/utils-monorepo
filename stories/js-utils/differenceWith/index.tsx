import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import differenceWithDemo from './differenceWithDemo'

const DifferenceWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={differenceWithDemo}>
        类似 difference，但使用比较器函数来决定比较标准
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default DifferenceWithDemo
