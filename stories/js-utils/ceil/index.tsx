import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import ceilDemo from './ceilDemo'

const CeilDemo = () => {
  return (
    <div>
      <div className="button" onClick={ceilDemo}>
        根据精度向上舍入数值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default CeilDemo
