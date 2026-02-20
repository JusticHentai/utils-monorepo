import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const SnakeCaseDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        转换为下划线命名
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SnakeCaseDemo
