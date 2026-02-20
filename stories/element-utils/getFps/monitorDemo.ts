import { action } from 'storybook/actions'
import { createFpsMonitor } from '../../../packages/element-utils/src/getFps'

let stopFn: (() => void) | null = null

export const startMonitor = () => {
  if (stopFn) {
    action('监控已在运行')('请先停止当前监控')
    return
  }

  action('开始监控')('每秒更新一次 FPS')

  stopFn = createFpsMonitor((fps) => {
    action('FPS 更新')(`当前帧率: ${fps} FPS`)
  })
}

export const stopMonitor = () => {
  if (!stopFn) {
    action('未在监控')('请先开始监控')
    return
  }

  stopFn()
  stopFn = null
  action('停止监控')('已停止 FPS 监控')
}
