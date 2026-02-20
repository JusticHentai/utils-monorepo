import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import flatMapDeepDemo from './flatMapDeepDemo'

const FlatMapDeepDemo = () => {
  return (
    <div>
      <div className="button" onClick={flatMapDeepDemo}>
        映射集合并将结果完全递归扁平化
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FlatMapDeepDemo
