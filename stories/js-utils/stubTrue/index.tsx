import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import stubTrueDemo from './stubTrueDemo'

const StubTrueDemo = () => {
  return (
    <div>
      <div className="button" onClick={stubTrueDemo}>
        返回 true 的函数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default StubTrueDemo
