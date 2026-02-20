import '../../.css/index.css'
import { createInitBasicDemo } from './initBasicDemo'
import { createInitAllChangesDemo } from './initAllChangesDemo'
import { createInitMetricDemo } from './initMetricDemo'
import triggerLayoutShiftDemo from './triggerLayoutShiftDemo'
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

const OnCLSDemo = () => {
  return (
    <div>
      <div className="button" onClick={initBasicDemo}>
        监听 CLS（最终值）
      </div>
      <div className="button" onClick={initAllChangesDemo}>
        监听 CLS（所有变化）
      </div>
      <div className="button" onClick={initMetricDemo}>
        监听 CLS（Metric 版本）
      </div>
      <div className="button" onClick={triggerLayoutShiftDemo}>
        触发布局偏移
      </div>
      <div className="button" onClick={cleanupDemo}>
        清理监听
      </div>
    </div>
  )
}

export default OnCLSDemo
