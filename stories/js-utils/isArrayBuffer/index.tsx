import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isArrayBufferDemo from './isArrayBufferDemo'

const IsArrayBufferDemo = () => {
  return (
    <div>
      <div className="button" onClick={isArrayBufferDemo}>
        检查 value 是否是 ArrayBuffer 对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsArrayBufferDemo
