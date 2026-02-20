import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import noopDemo from './noopDemo'

const NoopDemo = () => {
  return (
    <div>
      <div className="button" onClick={noopDemo}>
        空函数演示
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default NoopDemo
