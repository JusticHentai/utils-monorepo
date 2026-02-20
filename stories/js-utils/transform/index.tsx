import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import transformDemo from './transformDemo'

const TransformDemo = () => {
  return (
    <div>
      <div className="button" onClick={transformDemo}>
        转换操作
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TransformDemo
