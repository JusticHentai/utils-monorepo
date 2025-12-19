import Timer from '../../../packages/js-utils/src/time/Timer'
import sleep from '../../../packages/js-utils/src/sleep'

const setDemo = async () => {
  const timer = new Timer()
  timer.start()
  await sleep(100)
  return timer.set()
}

export default setDemo
