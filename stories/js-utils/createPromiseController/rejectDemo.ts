import { action } from 'storybook/actions'
import createPromiseController from '../../../packages/js-utils/src/createPromiseController'

const rejectDemo = async () => {
  action('创建会被拒绝的 Promise 控制器')()
  
  const controller = createPromiseController<string>()
  
  // 模拟失败场景
  setTimeout(() => {
    action('1.5 秒后拒绝 Promise')()
    controller.reject(new Error('模拟的错误'))
  }, 1500)
  
  action('开始等待 Promise...')()
  
  try {
    await controller.promise
    action('这行不应该执行')()
  } catch (error) {
    action(`Promise 被拒绝，错误: ${error.message}`)()
  }
}

export default rejectDemo