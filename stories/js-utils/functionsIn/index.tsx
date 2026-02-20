import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import functionsInDemo from './functionsInDemo'

const FunctionsInDemo = () => {
  return (
    <div>
      <div className="button" onClick={functionsInDemo}>
        返回对象所有函数属性名数组（含继承属性）
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FunctionsInDemo
