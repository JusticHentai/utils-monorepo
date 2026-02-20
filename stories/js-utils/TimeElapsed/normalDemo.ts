import { action } from 'storybook/actions'
import sleep from '../../../packages/js-utils/src/sleep'
import TimeElapsed from '../../../packages/js-utils/src/TimeElapsed'

const normalDemo = async () => {
  const timeElapsed = new TimeElapsed()

  // 开始计时
  const startResult = timeElapsed.start()
  action('开始计时')(startResult)

  await sleep(1000)

  // 设置第一个时间节点
  const firstSet = timeElapsed.set()
  action('1000ms 后设置一个时间节点')(firstSet)

  await sleep(2000)

  // 设置第二个时间节点
  const secondSet = timeElapsed.set()
  action('2000ms 后设置一个时间节点')(secondSet)
}

export default normalDemo
