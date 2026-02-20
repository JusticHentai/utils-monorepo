import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import objectDemo from './objectDemo'

const IsObjectDemo = () => {
  return (
    <div>
      <div className="button" onClick={objectDemo}>
        isObject - 类型检测
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsObjectDemo
