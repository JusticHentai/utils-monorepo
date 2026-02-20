import '../../.css/index.css'
import { createInitBasicDemo } from './initBasicDemo'
import { createInitAllChangesDemo } from './initAllChangesDemo'
import { createInitMetricDemo } from './initMetricDemo'
import { createCleanupDemo } from './cleanupDemo'

// 通用变量在 index.tsx 中定义
let stopFn: (() => void) | null = null

// 通过工厂函数传递变量
const initBasicDemo = createInitBasicDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)

const initAllChangesDemo = createInitAllChangesDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)

const initMetricDemo = createInitMetricDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)

const cleanupDemo = createCleanupDemo(
  () => stopFn,
  () => {
    stopFn = null
  }
)

const OnLCPDemo = () => {
  return (
    <div>
      <div className="button" onClick={initBasicDemo}>
        监听 LCP（最终值）
      </div>
      <div className="button" onClick={initAllChangesDemo}>
        监听 LCP（所有变化）
      </div>
      <div className="button" onClick={initMetricDemo}>
        监听 LCP（Metric 版本）
      </div>
      <div className="button" onClick={cleanupDemo}>
        清理监听
      </div>
    </div>
  )
}

export default OnLCPDemo
