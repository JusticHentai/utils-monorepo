import { action } from 'storybook/actions'
import createEventListener from '../../../packages/element-utils/src/createEventListener'

const onceDemo = () => {
  // 使用 once 选项，事件只触发一次
  const stopClick = createEventListener(
    document,
    'click',
    (e) => {
      action('点击事件（once）')({
        x: (e as MouseEvent).clientX,
        y: (e as MouseEvent).clientY,
        message: '此事件只触发一次',
      })
    },
    { once: true }
  )

  action('once 点击监听已启动')('点击页面任意位置，事件只会触发一次')
}

export default onceDemo
