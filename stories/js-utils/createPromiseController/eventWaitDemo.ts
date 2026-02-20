import { action } from 'storybook/actions'
import createPromiseController from '../../../packages/js-utils/src/createPromiseController'

const eventWaitDemo = async () => {
  action('创建按钮并等待点击事件')()

  const waitForClick = (element: HTMLElement) => {
    const controller = createPromiseController<MouseEvent>()

    const handleClick = (event: MouseEvent) => {
      element.removeEventListener('click', handleClick)
      controller.resolve(event)
    }

    element.addEventListener('click', handleClick)
    return controller.promise
  }

  // 创建一个临时按钮
  const button = document.createElement('button')
  button.textContent = '点击我完成 Promise'
  button.className = 'button'

  const container = document.getElementById('createPromiseControllerDemo')
  container?.appendChild(button)

  action('按钮已创建，等待点击...')()

  try {
    const event = await waitForClick(button)
    action(`按钮被点击！坐标: (${event.clientX}, ${event.clientY})`)()
  } finally {
    // 清理按钮
    container?.removeChild(button)
    action('按钮已清理')()
  }
}

export default eventWaitDemo
