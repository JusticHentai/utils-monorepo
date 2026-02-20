import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isWeakSetDemo from './isWeakSetDemo'

const IsWeakSetDemo = () => {
  return (
    <div>
      <div className="button" onClick={isWeakSetDemo}>
        检查 value 是否是 WeakSet 对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsWeakSetDemo
