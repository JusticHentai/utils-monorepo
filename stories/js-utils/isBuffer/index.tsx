import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isBufferDemo from './isBufferDemo'

const IsBufferDemo = () => {
  return (
    <div>
      <div className="button" onClick={isBufferDemo}>
        检查 value 是否是 Buffer
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsBufferDemo
