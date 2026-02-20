import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import withoutDemo from './withoutDemo'

const WithoutDemo = () => {
  return (
    <div>
      <div className="button" onClick={withoutDemo}>
        排除值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default WithoutDemo
