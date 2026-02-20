import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const ConstantDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        constant - 创建常量函数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ConstantDemo
