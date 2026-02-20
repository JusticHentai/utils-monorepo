import { action } from 'storybook/actions'
import createEventListener from '../../../packages/element-utils/src/createEventListener'

const keyboardDemo = () => {
  // 监听键盘事件
  const stopKeydown = createEventListener(document, 'keydown', (e) => {
    const event = e as KeyboardEvent
    action('键盘按下')({
      key: event.key,
      code: event.code,
      ctrlKey: event.ctrlKey,
      shiftKey: event.shiftKey,
      altKey: event.altKey,
      metaKey: event.metaKey,
    })
  })

  action('键盘监听已启动')('按下任意键查看效果，5秒后自动停止')

  setTimeout(() => {
    stopKeydown()
    action('监听已停止')('keydown 事件监听已移除')
  }, 5000)
}

export default keyboardDemo
