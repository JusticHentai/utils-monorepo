import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isUndefinedDemo from './isUndefinedDemo'

const IsUndefinedDemo = () => {
  return (
    <div>
      <div className="button" onClick={isUndefinedDemo}>
        检查 value 是否是 undefined
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsUndefinedDemo
