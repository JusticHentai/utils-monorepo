import { action } from 'storybook/actions'
import ResourceController from '../../../packages/js-utils/src/resource-controller'
import sleep from '../../../packages/js-utils/src/sleep'

/**
 * 自动处理模式演示
 * 1. 任务 1 10s
 * 2. 5s 后 添加任务 2 10s 添加任务 3 10s (任务2应该立即开始)
 * 3. 2s 后 添加紧急任务 10s (紧急任务应该立即开始)
 */
const autoProcessDemo = async () => {
  const controller = new ResourceController({ maxConcurrency: 2 })

  action('创建 ResourceController 最大并发2')()

  // 启用自动处理模式
  controller.enableAutoProcess()
  action('启用自动处理模式')()

  // 添加任务会自动开始处理
  controller.add({
    name: 'auto-task-1',
    loadFn: async () => {
      try {
        action('开始加载自动任务1')()
        await sleep(10000)
        action('自动任务1加载完成')()
        return 'Auto task 1 completed'
      } catch (error: any) {
        return `auto task 1 failed: ${error.message}`
      }
    },
    priority: 1,
  })

  action('添加自动任务1 优先级1')()

  // 等待一段时间后添加更多任务
  await sleep(5000)

  controller.add({
    name: 'auto-task-2',
    loadFn: async () => {
      try {
        action('开始加载自动任务2')()
        await sleep(10000)
        action('自动任务2加载完成')()
        return 'Auto task 2 completed'
      } catch (error: any) {
        return `auto task 2 failed: ${error.message}`
      }
    },
    priority: 2,
  })

  action('添加自动任务2 优先级2')()

  controller.add({
    name: 'auto-task-3',
    loadFn: async () => {
      try {
        action('开始加载自动任务3')()
        await sleep(10000)
        action('自动任务3加载完成')()
        return 'Auto task 3 completed'
      } catch (error: any) {
        return `auto task 3 failed: ${error.message}`
      }
    },
    priority: 3,
  })

  action('添加自动任务3 优先级3')()

  // 等待一段时间后添加更多任务
  await sleep(2000)

  controller.add({
    name: 'urgent-task',
    loadFn: async () => {
      try {
        action('开始加载紧急任务')()
        await sleep(10000)
        action('紧急任务加载完成')()
        return 'Urgent task completed'
      } catch (error: any) {
        return `urgent task failed: ${error.message}`
      }
    },
    priority: 0, // 最高优先级，会插队
  })

  action('添加紧急任务 优先级0 (会立即开始执行，与任务1并发)')()

  // 等待所有任务完成
  await Promise.all([
    controller.resourceMap['auto-task-1'].promise,
    controller.resourceMap['auto-task-2'].promise,
    controller.resourceMap['auto-task-3'].promise,
    controller.resourceMap['urgent-task'].promise,
  ])

  const results = {
    'auto-task-1': controller.resourceMap['auto-task-1'].current,
    'auto-task-2': controller.resourceMap['auto-task-2'].current,
    'auto-task-3': controller.resourceMap['auto-task-3'].current,
    'urgent-task': controller.resourceMap['urgent-task'].current,
  }

  action('所有资源加载完成, 结果:')(results)
}

export default autoProcessDemo
