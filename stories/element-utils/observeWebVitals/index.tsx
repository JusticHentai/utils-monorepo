import '../../.css/index.css'
import { createBasicDemo } from './basicDemo'
import { createLcpDemo } from './lcpDemo'
import { createInpDemo } from './inpDemo'
import { createClsDemo } from './clsDemo'
import { createFcpDemo } from './fcpDemo'
import { createTtfbDemo } from './ttfbDemo'
import { createFpDemo } from './fpDemo'
import { createFidDemo } from './fidDemo'
import { createCleanupDemo } from './cleanupDemo'

// 通用变量：存储当前的停止函数
let stopFn: (() => void) | null = null

// 通过工厂函数传递变量
const basicDemo = createBasicDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)
const lcpDemo = createLcpDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)
const inpDemo = createInpDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)
const clsDemo = createClsDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)
const fcpDemo = createFcpDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)
const ttfbDemo = createTtfbDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)
const fpDemo = createFpDemo(
  () => stopFn,
  (fn) => {
    stopFn = fn
  }
)
const fidDemo = createFidDemo(
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

const ObserveWebVitalsDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监控所有指标
      </div>
      <div className="button" onClick={lcpDemo}>
        只监控 LCP
      </div>
      <div className="button" onClick={inpDemo}>
        只监控 INP
      </div>
      <div className="button" onClick={clsDemo}>
        只监控 CLS
      </div>
      <div className="button" onClick={fcpDemo}>
        只监控 FCP
      </div>
      <div className="button" onClick={ttfbDemo}>
        只监控 TTFB
      </div>
      <div className="button" onClick={fpDemo}>
        只监控 FP
      </div>
      <div className="button" onClick={fidDemo}>
        只监控 FID
      </div>
      <div className="button" onClick={cleanupDemo}>
        停止监控
      </div>
    </div>
  )
}

export default ObserveWebVitalsDemo
