import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import rejectDemo from './rejectDemo'

const RejectDemo = () => {
  return (
    <div>
      <div className="button" onClick={rejectDemo}>
        与 filter 相反，返回所有不满足谓词函数的元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default RejectDemo
