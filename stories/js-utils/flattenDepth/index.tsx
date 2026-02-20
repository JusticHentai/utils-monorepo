import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import flattenDepthDemo from './flattenDepthDemo'

const FlattenDepthDemo = () => {
  return (
    <div>
      <div className="button" onClick={flattenDepthDemo}>
        将数组扁平化指定深度
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FlattenDepthDemo
