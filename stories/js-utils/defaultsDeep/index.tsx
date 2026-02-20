import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import defaultsDeepDemo from './defaultsDeepDemo'

const DefaultsDeepDemo = () => {
  return (
    <div>
      <div className="button" onClick={defaultsDeepDemo}>
        类似 defaults，但会递归合并对象属性
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default DefaultsDeepDemo
