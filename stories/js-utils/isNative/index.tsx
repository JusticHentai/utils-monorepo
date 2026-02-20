import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isNativeDemo from './isNativeDemo'

const IsNativeDemo = () => {
  return (
    <div>
      <div className="button" onClick={isNativeDemo}>
        检查 value 是否是原生函数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsNativeDemo
