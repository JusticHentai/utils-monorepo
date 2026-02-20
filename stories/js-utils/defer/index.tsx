import '../../.css/index.css'
import deferDemo from './deferDemo'
import cancelDemo from './cancelDemo'
import delayDemo from './delayDemo'

const DeferDemo = () => {
  return (
    <div>
      <div className="button" onClick={deferDemo}>
        defer - 延迟执行与参数传递
      </div>
      <div className="button" onClick={cancelDemo}>
        defer - 取消延迟执行
      </div>
      <div className="button" onClick={delayDemo}>
        delay - 延迟指定毫秒
      </div>
    </div>
  )
}

export default DeferDemo
