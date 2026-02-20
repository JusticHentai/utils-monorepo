import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isObjectLikeDemo from './isObjectLikeDemo'

const IsObjectLikeDemo = () => {
  return (
    <div>
      <div className="button" onClick={isObjectLikeDemo}>
        检查 value 是否是类对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsObjectLikeDemo
