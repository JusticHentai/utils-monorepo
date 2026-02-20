import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import flatMapDepthDemo from './flatMapDepthDemo'

const FlatMapDepthDemo = () => {
  return (
    <div>
      <div className="button" onClick={flatMapDepthDemo}>
        映射集合并将结果扁平化指定深度
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FlatMapDepthDemo
