import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import startsWithDemo from './startsWithDemo'

const StartsWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={startsWithDemo}>
        检查字符串 string 是否以给定的目标字符串开头
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default StartsWithDemo
