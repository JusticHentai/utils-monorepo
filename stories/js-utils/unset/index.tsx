import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import unsetDemo from './unsetDemo'

const UnsetDemo = () => {
  return (
    <div>
      <div className="button" onClick={unsetDemo}>
        移除属性
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UnsetDemo
