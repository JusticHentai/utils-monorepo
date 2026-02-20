import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isTypedArrayDemo from './isTypedArrayDemo'

const IsTypedArrayDemo = () => {
  return (
    <div>
      <div className="button" onClick={isTypedArrayDemo}>
        检查 value 是否是 TypedArray
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsTypedArrayDemo
