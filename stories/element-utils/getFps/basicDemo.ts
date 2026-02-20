import { action } from 'storybook/actions'
import getFps from '../../../packages/element-utils/src/FpsMonitor'

export const runBasicDemo = async () => {
  action('正在检测帧率')('请等待约 1 秒...')
  const fps = await getFps()
  action('帧率检测结果')(`当前帧率: ${fps} FPS`)
}
