import '../../.css/index.css'
import { createObserveDemo } from './observeDemo'
import { createStopObserveDemo } from './stopObserveDemo'
import getMetricsDemo from './getMetricsDemo'
import getStatsDemo from './getStatsDemo'
import getSlowResourcesDemo from './getSlowResourcesDemo'
import getLargeResourcesDemo from './getLargeResourcesDemo'

let stopFn: (() => void) | null = null

const observeDemo = createObserveDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)
const stopObserveDemo = createStopObserveDemo(
  () => stopFn,
  () => {
    stopFn = null
  }
)

const ResourceMonitorDemo = () => {
  return (
    <div>
      <div className="button" onClick={observeDemo}>
        开始监听资源加载
      </div>
      <div className="button" onClick={stopObserveDemo}>
        停止监听
      </div>
      <div className="button" onClick={getMetricsDemo}>
        获取资源指标
      </div>
      <div className="button" onClick={getStatsDemo}>
        获取资源统计
      </div>
      <div className="button" onClick={getSlowResourcesDemo}>
        获取慢资源
      </div>
      <div className="button" onClick={getLargeResourcesDemo}>
        获取大资源
      </div>
    </div>
  )
}

export default ResourceMonitorDemo
