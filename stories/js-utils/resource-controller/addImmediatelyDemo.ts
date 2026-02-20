import { action } from 'storybook/actions'
import ResourceController from '../../../packages/js-utils/src/resource-controller'
import sleep from '../../../packages/js-utils/src/sleep'

const addImmediatelyDemo = async () => {
  const controller = new ResourceController({ maxConcurrency: 2 })

  action('创建 ResourceController 最大并发2')()

  // 添加并立即开始加载
  action('添加紧急资源并立即加载 优先级0')()
  await controller.addAndLoadImmediately({
    name: 'urgent-resource',
    loadFn: async () => {
      try {
        action('开始加载紧急资源')()
        await sleep(2000)
        action('紧急资源加载完成')()
        return 'urgent resource loaded immediately'
      } catch (error: any) {
        return `urgent resource failed: ${error.message}`
      }
    },
    priority: 0, // 最高优先级
  })

  action('紧急资源外部等待加载完成')()

  // 再添加一个普通资源
  action('添加普通资源并立即加载 优先级2')()
  await controller.addAndLoadImmediately({
    name: 'normal-resource',
    loadFn: async () => {
      try {
        action('开始加载普通资源')()
        await sleep(2000)
        action('普通资源加载完成')()
        return 'normal resource loaded'
      } catch (error: any) {
        return `normal resource failed: ${error.message}`
      }
    },
    priority: 2,
  })

  action('普通资源外部等待加载完成')()

  const results = {
    urgent: controller.resourceMap['urgent-resource'].current,
    normal: controller.resourceMap['normal-resource'].current,
  }

  action('所有资源加载完成, 结果:')({
    results,
    status: controller.getStatus(),
  })
}

export default addImmediatelyDemo
