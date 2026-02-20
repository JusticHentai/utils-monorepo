import '../../.css/index.css'
import { createCalculateTBTDemo } from './calculateTBTDemo'
import { createGetStatsDemo } from './getStatsDemo'
import { createStartObserveDemo } from './startObserveDemo'
import { createStopObserveDemo } from './stopObserveDemo'
import triggerLongTaskDemo from './triggerLongTaskDemo'

import type LongTaskObserver from '../../../packages/element-utils/src/LongTaskMonitor'

// 观察器实例
let observer: LongTaskObserver | null = null

// 通过工厂函数传递变量
const startObserveDemo = createStartObserveDemo(
  () => observer,
  (obs: LongTaskObserver) => {
    observer = obs
  }
)
const stopObserveDemo = createStopObserveDemo(
  () => observer,
  () => {
    observer = null
  }
)
const getStatsDemo = createGetStatsDemo(() => observer)
const calculateTBTDemo = createCalculateTBTDemo(() => observer)

const LongTaskMonitorDemo = () => {
  return (
    <div>
      <div className="button" onClick={startObserveDemo}>
        开始监听长任务
      </div>
      <div className="button" onClick={stopObserveDemo}>
        停止监听
      </div>
      <div className="button" onClick={triggerLongTaskDemo}>
        触发长任务
      </div>
      <div className="button" onClick={getStatsDemo}>
        获取统计信息
      </div>
      <div className="button" onClick={calculateTBTDemo}>
        计算 TBT
      </div>
    </div>
  )
}

export default LongTaskMonitorDemo
