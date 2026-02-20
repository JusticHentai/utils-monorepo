import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isArgumentsDemo from './isArgumentsDemo'

const IsArgumentsDemo = () => {
  return (
    <div>
      <div className="button" onClick={isArgumentsDemo}>
        检查 value 是否是类 arguments 对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsArgumentsDemo
