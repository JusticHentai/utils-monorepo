import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import lowerFirstDemo from './lowerFirstDemo'

const LowerFirstDemo = () => {
  return (
    <div>
      <div className="button" onClick={lowerFirstDemo}>
        将字符串首字母转换为小写
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default LowerFirstDemo
