import { action } from 'storybook/actions'
import sleep from '../../../packages/js-utils/src/sleep'

const normalDemo = async () => {
  action('开始睡眠 1 秒')()
  await sleep(1000)
  action('睡眠完成')()
}

export default normalDemo
