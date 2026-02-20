import { action } from 'storybook/actions'
import createPromiseController from '../../../packages/js-utils/src/createPromiseController'

const basicDemo = async () => {
  action('创建 Promise 控制器')()

  const controller = createPromiseController<string>()

  // 模拟异步操作
  setTimeout(() => {
    action('2 秒后解决 Promise')()
    controller.resolve('任务完成！')
  }, 2000)

  action('开始等待 Promise...')()
  const result = await controller.promise
  action(`Promise 完成，结果: ${result}`)()
}

export default basicDemo
