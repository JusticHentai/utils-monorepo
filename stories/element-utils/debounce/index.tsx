import '../../.css/index.css'
import { initBasicDemo, runBasicDemo } from './basicDemo'
import { initImmediateDemo, runImmediateDemo } from './immediateDemo'

const DebounceDemo = () => {
  return (
    <div>
      <div className="button" onClick={initBasicDemo}>
        初始化防抖函数（延迟执行）
      </div>
      <div className="button" onClick={runBasicDemo}>
        触发防抖函数（延迟执行）
      </div>
      <div className="button" onClick={initImmediateDemo}>
        初始化防抖函数（立即执行）
      </div>
      <div className="button" onClick={runImmediateDemo}>
        触发防抖函数（立即执行）
      </div>
    </div>
  )
}

export default DebounceDemo
