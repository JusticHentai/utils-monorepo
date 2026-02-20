import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import reargDemo from './reargDemo'

const ReargDemo = () => {
  return (
    <div>
      <div className="button" onClick={reargDemo}>
        重排参数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ReargDemo
