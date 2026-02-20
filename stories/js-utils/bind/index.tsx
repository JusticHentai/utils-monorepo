import '../../.css/index.css'
import bindDemo from './bindDemo'
import edgeCaseDemo from './edgeCaseDemo'

const BindDemo = () => {
  return (
    <div>
      <div className="button" onClick={bindDemo}>
        bind - 绑定 this 与部分应用
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        bind - 边界情况
      </div>
    </div>
  )
}

export default BindDemo
