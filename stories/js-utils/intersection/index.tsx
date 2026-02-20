import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const IntersectionDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        数组交集
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IntersectionDemo
