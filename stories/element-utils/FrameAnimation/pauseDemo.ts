import { action } from 'storybook/actions'
import type { FrameAnimationInstance } from '../../../packages/element-utils/src/FrameAnimation'

const pauseDemo = (instance: FrameAnimationInstance | null) => {
  instance?.pause()
  action('暂停')('已暂停')
}

export default pauseDemo
