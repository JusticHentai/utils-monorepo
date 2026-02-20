import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import normalDemo from './normalDemo'

const BaseFunctionDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        1 + 2 = ?
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default BaseFunctionDemo
