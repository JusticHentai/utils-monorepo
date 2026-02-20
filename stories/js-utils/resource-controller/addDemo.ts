import { action } from 'storybook/actions'
import ResourceController from '../../../packages/js-utils/src/resource-controller'
import sleep from '../../../packages/js-utils/src/sleep'

const addDemo = async () => {
  const controller = new ResourceController({ maxConcurrency: 2 })

  // 添加不同优先级的资源
  controller.add({
    name: 'resource1',
    loadFn: async () => {
      try {
        action('开始加载资源1')()
        await sleep(2000)
        action('资源1加载完成')()
        return 'resource1 loaded'
      } catch (error: any) {
        return `resource1 failed: ${error.message}`
      }
    },
  })

  action('添加资源1 优先级无')()

  controller.add({
    name: 'resource2',
    loadFn: async () => {
      try {
        action('开始加载资源2')()
        await sleep(2000)
        action('资源2加载完成')()
        return 'resource2 loaded'
      } catch (error: any) {
        return `resource2 failed: ${error.message}`
      }
    },
    priority: 1, // 高优先级
  })

  action('添加资源2 优先级1')()

  controller.add({
    name: 'resource3',
    loadFn: async () => {
      try {
        action('开始加载资源3')()
        await sleep(2000)
        action('资源3加载完成')()
        return 'resource3 loaded'
      } catch (error: any) {
        return `resource3 failed: ${error.message}`
      }
    },
    priority: 2, // 中等优先级
  })

  action('添加资源3 优先级2')()

  action('开始加载资源 最大并发2')()

  // 手动开始加载
  await controller.load()

  // 获取结果
  const results = {
    resource1: controller.resourceMap['resource1'].current,
    resource2: controller.resourceMap['resource2'].current,
    resource3: controller.resourceMap['resource3'].current,
  }

  action('加载完成, 结果:')(results)
}

export default addDemo
