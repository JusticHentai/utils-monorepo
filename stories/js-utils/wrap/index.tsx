import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import wrapDemo from './wrapDemo'

const WrapDemo = () => {
  return (
    <div>
      <div className="button" onClick={wrapDemo}>
        函数包装
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default WrapDemo
