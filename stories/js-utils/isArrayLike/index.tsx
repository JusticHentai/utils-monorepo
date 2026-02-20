import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isArrayLikeDemo from './isArrayLikeDemo'

const IsArrayLikeDemo = () => {
  return (
    <div>
      <div className="button" onClick={isArrayLikeDemo}>
        检查 value 是否是类数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsArrayLikeDemo
