import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import delayDemo from './delayDemo'

const DelayDemo = () => {
  return (
    <div>
      <div className="button" onClick={delayDemo}>
        延迟 wait 毫秒后调用 func
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default DelayDemo
