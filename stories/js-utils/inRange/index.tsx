import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const InRangeDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        范围检查
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default InRangeDemo
