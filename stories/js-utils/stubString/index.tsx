import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import stubStringDemo from './stubStringDemo'

const StubStringDemo = () => {
  return (
    <div>
      <div className="button" onClick={stubStringDemo}>
        返回空字符串的函数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default StubStringDemo
