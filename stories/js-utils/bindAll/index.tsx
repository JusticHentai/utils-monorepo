import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import bindAllDemo from './bindAllDemo'

const BindAllDemo = () => {
  return (
    <div>
      <div className="button" onClick={bindAllDemo}>
        绑定对象上的多个方法到对象自身
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default BindAllDemo
