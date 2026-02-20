import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import stubFalseDemo from './stubFalseDemo'

const StubFalseDemo = () => {
  return (
    <div>
      <div className="button" onClick={stubFalseDemo}>
        返回 false 的函数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default StubFalseDemo
