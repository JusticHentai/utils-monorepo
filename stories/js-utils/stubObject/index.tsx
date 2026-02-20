import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import stubObjectDemo from './stubObjectDemo'

const StubObjectDemo = () => {
  return (
    <div>
      <div className="button" onClick={stubObjectDemo}>
        返回空对象的函数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default StubObjectDemo
