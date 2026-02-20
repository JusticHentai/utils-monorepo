import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import joinDemo from './joinDemo'

const JoinDemo = () => {
  return (
    <div>
      <div className="button" onClick={joinDemo}>
        基础连接
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default JoinDemo
