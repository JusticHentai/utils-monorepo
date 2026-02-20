import { action } from 'storybook/actions'
import ResourceController from '../../../packages/js-utils/src/resource-controller'
import sleep from '../../../packages/js-utils/src/sleep'

const concurrencyDemo = async () => {
  // 设置最大并发为 2
  const controller = new ResourceController({ maxConcurrency: 2 })

  action('创建 ResourceController 最大并发2')()

  // 添加 5 个任务，观察并发限制效果
  for (let i = 1; i <= 5; i++) {
    controller.add({
      name: `task-${i}`,
      loadFn: async () => {
        try {
          action(`任务${i} 开始加载`)()
          await sleep(2000)
          action(`任务${i} 加载完成`)()
          return `task-${i} completed`
        } catch (error: any) {
          return `task-${i} failed: ${error.message}`
        }
      },
    })
  }

  action('添加5个任务, 最大并发2, 开始加载')()

  await controller.load()

  const results: Record<string, any> = {}
  for (let i = 1; i <= 5; i++) {
    results[`task-${i}`] = controller.resourceMap[`task-${i}`].current
  }

  action('所有任务完成, 结果:')(results)
}

export default concurrencyDemo
