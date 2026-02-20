import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import overSomeDemo from './overSomeDemo'

const OverSomeDemo = () => {
  return (
    <div>
      <div className="button" onClick={overSomeDemo}>
        创建一个函数，检查是否有任意断言函数对给定参数返回 true
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default OverSomeDemo
