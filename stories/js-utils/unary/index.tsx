import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import unaryDemo from './unaryDemo'

const UnaryDemo = () => {
  return (
    <div>
      <div className="button" onClick={unaryDemo}>
        创建一个最多接受一个参数的函数，忽略多余的参数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UnaryDemo
