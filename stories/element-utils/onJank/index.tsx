import '../../.css/index.css'
import { createStartDemo } from './startDemo'
import { createStopDemo } from './stopDemo'
import triggerJankDemo from './triggerJankDemo'

// 通用变量：停止监听函数
let stopFn: (() => void) | null = null

// 通过工厂函数传递变量
const startDemo = createStartDemo(
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

const OnJankDemo = () => {
  return (
    <div>
      <div className="button" onClick={startDemo}>
        开始监听卡顿
      </div>
      <div className="button" onClick={stopDemo}>
        停止监听
      </div>
      <div className="button" onClick={triggerJankDemo}>
        模拟卡顿（阻塞主线程 200ms）
      </div>

      {/* 演示区域 */}
      <div className="area">
        <div
          id="status"
          className="card"
          style={{
            width: 280,
            transition: 'all 0.3s',
          }}
        >
          点击"开始监听"启动卡顿检测
        </div>
      </div>
    </div>
  )
}

export default OnJankDemo
