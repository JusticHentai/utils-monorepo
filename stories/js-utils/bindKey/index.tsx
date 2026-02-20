import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import bindKeyDemo from './bindKeyDemo'

const BindKeyDemo = () => {
  return (
    <div>
      <div className="button" onClick={bindKeyDemo}>
        创建一个函数，在 object[key] 上调用方法，可以预设参数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default BindKeyDemo
