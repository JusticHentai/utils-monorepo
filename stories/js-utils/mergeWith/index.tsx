import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import mergeWithDemo from './mergeWithDemo'

const MergeWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={mergeWithDemo}>
        类似于 merge，但可以自定义合并逻辑
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default MergeWithDemo
