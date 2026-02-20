import { action } from 'storybook/actions'
import type { FrameAnimationInstance } from '../../../packages/element-utils/src/FrameAnimation'

const startOnceDemo = (instance: FrameAnimationInstance | null) => {
  instance?.start(1)
  action('播放一次')('播放 1 次')
}

export default startOnceDemo
