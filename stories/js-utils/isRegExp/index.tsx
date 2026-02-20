import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isRegExpDemo from './isRegExpDemo'

const IsRegExpDemo = () => {
  return (
    <div>
      <div className="button" onClick={isRegExpDemo}>
        检查 value 是否是 RegExp 对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsRegExpDemo
