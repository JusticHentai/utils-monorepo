import '../../.css/index.css'
import { createBasicDemo } from './basicDemo'
import { createCleanupDemo } from './cleanupDemo'
import { createMaxRatioDemo } from './maxRatioDemo'
import { createWidthOnlyDemo } from './widthOnlyDemo'

let cleanup: (() => void) | null = null

const basicDemo = createBasicDemo(
  () => cleanup,
  (fn) => {
    cleanup = fn
  },
)

const cleanupDemo = createCleanupDemo(
  () => cleanup,
  () => {
    cleanup = null
  },
)

const maxRatioDemo = createMaxRatioDemo(
  () => cleanup,
  (fn) => {
    cleanup = fn
  },
)

const widthOnlyDemo = createWidthOnlyDemo(
  () => cleanup,
  (fn) => {
    cleanup = fn
  },
)

const ResizeDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        默认适配 (BOTH 模式)
      </div>
      <div className="button" onClick={widthOnlyDemo}>
        仅宽度适配 (WIDTH 模式)
      </div>
      <div className="button" onClick={maxRatioDemo}>
        允许放大 (maxRatio: Infinity)
      </div>
      <div className="button" onClick={cleanupDemo}>
        销毁监听
      </div>

      <div className="area">
        <div id="resize-info" className="card">
          点击按钮初始化 resize 适配
        </div>
      </div>
    </div>
  )
}

export default ResizeDemo
