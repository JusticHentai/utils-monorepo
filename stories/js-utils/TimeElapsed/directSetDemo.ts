import { action } from 'storybook/actions'
import sleep from '../../../packages/js-utils/src/sleep'
import TimeElapsed from '../../../packages/js-utils/src/TimeElapsed'

const directSetDemo = async () => {
  const timeElapsed = new TimeElapsed()

  const firstSet = timeElapsed.set()
  action('首次 set')(firstSet)

  await sleep(1000)

  const secondSet = timeElapsed.set()
  action('1000ms 后第二次 set')(secondSet)
}

export default directSetDemo
