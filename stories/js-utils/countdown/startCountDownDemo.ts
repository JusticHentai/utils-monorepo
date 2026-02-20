import { action } from 'storybook/actions'
import countdown from '../../../packages/js-utils/src/countdown'

const startCountDownDemo = () => {
  const endTs = Math.floor(Date.now() / 1000) + 5 // 5秒后

  /** 返回清除定时器的函数 */
  return countdown({
    endTs,
    cb: (remaining) => {
      action('剩余秒数:')(remaining)
    },
  })
}

export default startCountDownDemo
