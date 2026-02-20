import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isWeakMapDemo from './isWeakMapDemo'

const IsWeakMapDemo = () => {
  return (
    <div>
      <div className="button" onClick={isWeakMapDemo}>
        检查 value 是否是 WeakMap 对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsWeakMapDemo
