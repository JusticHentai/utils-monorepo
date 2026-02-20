import { action } from 'storybook/actions'
import type { FrameAnimationInstance } from '../../../packages/element-utils/src/FrameAnimation'

const startDemo = (instance: FrameAnimationInstance | null) => {
  instance?.start()
  action('开始播放')('循环播放')
}

export default startDemo
