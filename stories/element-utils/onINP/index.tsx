import '../../.css/index.css'
import { createInitBasicDemo } from './initBasicDemo'
import { createInitAllChangesDemo } from './initAllChangesDemo'
import { createInitMetricDemo } from './initMetricDemo'
import { createCleanupDemo } from './cleanupDemo'
import {
  triggerSlowInteraction,
  triggerFastInteraction,
} from './triggerInteractionDemo'

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

const OnINPDemo = () => {
  return (
    <div>
      <div className="button" onClick={initBasicDemo}>
        监听 INP（最终值）
      </div>
      <div className="button" onClick={initAllChangesDemo}>
        监听 INP（所有变化）
      </div>
      <div className="button" onClick={initMetricDemo}>
        监听 INP（Metric 版本）
      </div>
      <div className="button" onClick={triggerSlowInteraction}>
        触发慢速交互（100ms）
      </div>
      <div className="button" onClick={triggerFastInteraction}>
        触发快速交互
      </div>
      <div className="button" onClick={cleanupDemo}>
        清理监听
      </div>
    </div>
  )
}

export default OnINPDemo
