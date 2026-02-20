import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import flattenDeepDemo from './flattenDeepDemo'

const FlattenDeepDemo = () => {
  return (
    <div>
      <div className="button" onClick={flattenDeepDemo}>
        将数组完全递归扁平化
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FlattenDeepDemo
