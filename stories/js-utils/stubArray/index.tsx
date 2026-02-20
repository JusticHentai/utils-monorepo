import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import stubArrayDemo from './stubArrayDemo'

const StubArrayDemo = () => {
  return (
    <div>
      <div className="button" onClick={stubArrayDemo}>
        返回空数组的函数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default StubArrayDemo
