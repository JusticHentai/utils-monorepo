import '../../.css/index.css'
import { createInitDemo } from './initDemo'
import { createInitMetricDemo } from './initMetricDemo'
import { createCleanupDemo } from './cleanupDemo'

// 通用变量在 index.tsx 中定义
let stopFn: (() => void) | null = null

// 通过工厂函数传递变量
const initDemo = createInitDemo(
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

const OnTTFBDemo = () => {
  return (
    <div>
      <div className="button" onClick={initDemo}>
        监听 TTFB
      </div>
      <div className="button" onClick={initMetricDemo}>
        监听 TTFB（Metric 版本）
      </div>
      <div className="button" onClick={cleanupDemo}>
        清理监听
      </div>
    </div>
  )
}

export default OnTTFBDemo
