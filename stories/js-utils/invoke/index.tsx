import '../../.css/index.css'
import invokeDemo from './invokeDemo'
import thisBindingDemo from './thisBindingDemo'
import edgeCaseDemo from './edgeCaseDemo'

const InvokeDemo = () => {
  return (
    <div>
      <div className="button" onClick={invokeDemo}>
        基础路径调用
      </div>
      <div className="button" onClick={thisBindingDemo}>
        this 绑定验证
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default InvokeDemo
