import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isArrayLikeObjectDemo from './isArrayLikeObjectDemo'

const IsArrayLikeObjectDemo = () => {
  return (
    <div>
      <div className="button" onClick={isArrayLikeObjectDemo}>
        检查 value 是否是类数组对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsArrayLikeObjectDemo
