import { action } from 'storybook/actions'
import type { FrameAnimationInstance } from '../../../packages/element-utils/src/FrameAnimation'

const resumeDemo = (instance: FrameAnimationInstance | null) => {
  instance?.resume()
  action('继续')('继续播放')
}

export default resumeDemo
