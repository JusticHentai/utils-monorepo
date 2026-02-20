import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const FlipDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        flip - 翻转参数顺序
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FlipDemo
