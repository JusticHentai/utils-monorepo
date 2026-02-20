import { action } from 'storybook/actions'
import ResourceController from '../../../packages/js-utils/src/resource-controller'
import sleep from '../../../packages/js-utils/src/sleep'

const priorityDemo = async () => {
  const controller = new ResourceController()

  action('创建 ResourceController 默认并发3')()

  // 添加不同优先级的资源
  controller.add({
    name: 'low-priority',
    loadFn: async () => {
      try {
        action('开始加载低优先级资源')()
        await sleep(10000)
        action('低优先级资源加载完成')()
        return 'Low priority resource loaded'
      } catch (error: any) {
        return `low priority failed: ${error.message}`
      }
    },
    priority: 3, // 低优先级
  })

  action('添加低优先级资源 优先级3')()

  controller.add({
    name: 'high-priority',
    loadFn: async () => {
      try {
        action('开始加载高优先级资源')()
        await sleep(10000)
        action('高优先级资源加载完成')()
        return 'High priority resource loaded'
      } catch (error: any) {
        return `high priority failed: ${error.message}`
      }
    },
    priority: 1, // 高优先级
  })

  action('添加高优先级资源 优先级1')()

  controller.add({
    name: 'medium-priority-1',
    loadFn: async () => {
      try {
        action('开始加载中等优先级资源1')()
        await sleep(10000)
        action('中等优先级资源1加载完成')()
        return 'Medium priority resource 1 loaded'
      } catch (error: any) {
        return `medium priority 1 failed: ${error.message}`
      }
    },
    priority: 2, // 中等优先级
  })

  action('添加中等优先级资源1 优先级2')()

  controller.add({
    name: 'medium-priority-2',
    loadFn: async () => {
      try {
        action('开始加载中等优先级资源2')()
        await sleep(10000)
        action('中等优先级资源2加载完成')()
        return 'Medium priority resource 2 loaded'
      } catch (error: any) {
        return `medium priority 2 failed: ${error.message}`
      }
    },
    priority: 2, // 中等优先级（与上面并行）
  })

  action('添加中等优先级资源2 优先级2')()

  controller.add({
    name: 'no-priority',
    loadFn: async () => {
      try {
        action('开始加载无优先级资源')()
        await sleep(10000)
        action('无优先级资源加载完成')()
        return 'No priority resource loaded'
      } catch (error: any) {
        return `no priority failed: ${error.message}`
      }
    },
    // 无优先级，最后加载
  })

  action('添加无优先级资源 优先级无')()

  action('开始按优先级加载所有资源')()

  // 开始加载
  await controller.load()

  // 获取结果
  const results = {
    'high-priority': controller.resourceMap['high-priority'].current,
    'medium-priority-1': controller.resourceMap['medium-priority-1'].current,
    'medium-priority-2': controller.resourceMap['medium-priority-2'].current,
    'low-priority': controller.resourceMap['low-priority'].current,
    'no-priority': controller.resourceMap['no-priority'].current,
  }

  action('优先级加载完成, 结果:')(results)
}

export default priorityDemo
