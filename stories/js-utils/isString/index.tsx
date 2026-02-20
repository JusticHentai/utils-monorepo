import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import stringDemo from './stringDemo'

const IsStringDemo = () => {
  return (
    <div>
      <div className="button" onClick={stringDemo}>
        isString - 类型检测
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsStringDemo
