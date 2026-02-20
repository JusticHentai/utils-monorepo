import '../../.css/index.css'
import { createStartListenDemo, createStopListenDemo } from './basicDemo'
import { createThrottleDemo, createStopThrottleDemo } from './throttleDemo'

// 通用变量：基础监听的清理函数
let basicStopFn: (() => void) | null = null

// 通用变量：节流监听的清理函数
let throttleStopFn: (() => void) | null = null

// 创建 demo 函数
const startListenDemo = createStartListenDemo(
  () => basicStopFn,
  (fn) => {
    basicStopFn = fn
  }
)
const stopListenDemo = createStopListenDemo(
  () => basicStopFn,
  () => {
    basicStopFn = null
  }
)
const throttleDemo = createThrottleDemo(
  () => throttleStopFn,
  (fn) => {
    throttleStopFn = fn
  }
)
const stopThrottleDemo = createStopThrottleDemo(
  () => throttleStopFn,
  () => {
    throttleStopFn = null
  }
)

const OnScrollDemo = () => {
  return (
    <div>
      <div className="button" onClick={startListenDemo}>
        开始监听滚动
      </div>
      <div className="button" onClick={stopListenDemo}>
        停止监听
      </div>
      <div className="button" onClick={throttleDemo}>
        节流监听（100ms）
      </div>
      <div className="button" onClick={stopThrottleDemo}>
        停止节流监听
      </div>

      {/* 演示区域 */}
      <div className="area">
        <div id="scroll-container" className="scroll-container">
          <div
            style={{
              width: 500,
              height: 500,
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: 8,
            }}
          >
            <p style={{ color: 'white', padding: 20 }}>滚动这个容器查看效果</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnScrollDemo
