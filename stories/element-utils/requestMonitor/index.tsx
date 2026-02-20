import '../../.css/index.css'
import { createObserveAllDemo } from './observeAllDemo'
import { createStopDemo } from './stopDemo'
import getStatsDemo from './getStatsDemo'
import sendXHRDemo from './sendXHRDemo'
import sendFetchDemo from './sendFetchDemo'
import clearDemo from './clearDemo'

let stopFn: (() => void) | null = null

const observeAllDemo = createObserveAllDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)
const stopDemo = createStopDemo(
  () => stopFn,
  () => {
    stopFn = null
  }
)

const RequestMonitorDemo = () => {
  return (
    <div>
      <div className="button" onClick={observeAllDemo}>
        开启监控
      </div>
      <div className="button" onClick={stopDemo}>
        停止监控
      </div>
      <div className="button" onClick={sendXHRDemo}>
        发送 XHR 请求
      </div>
      <div className="button" onClick={sendFetchDemo}>
        发送 Fetch 请求
      </div>
      <div className="button" onClick={getStatsDemo}>
        查看统计信息
      </div>
      <div className="button" onClick={clearDemo}>
        清空记录
      </div>
    </div>
  )
}

export default RequestMonitorDemo
