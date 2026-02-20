import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const FunctionsDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        functions / functionsIn - 获取函数属性名
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FunctionsDemo
