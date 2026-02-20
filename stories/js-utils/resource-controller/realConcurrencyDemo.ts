import { action } from 'storybook/actions'
import ResourceController from '../../../packages/js-utils/src/resource-controller'
import sleep from '../../../packages/js-utils/src/sleep'

const realConcurrencyDemo = async () => {
  const controller = new ResourceController({ maxConcurrency: 3 })

  action('创建 ResourceController 最大并发3')()

  // 模拟真实场景：加载不同类型的资源
  controller.add({
    name: 'css-bundle',
    loadFn: async () => {
      try {
        action('开始加载 CSS Bundle')()
        await sleep(1000)
        action('CSS Bundle 加载完成')()
        return 'CSS loaded'
      } catch (error: any) {
        return `CSS failed: ${error.message}`
      }
    },
    priority: 1,
  })

  controller.add({
    name: 'js-bundle',
    loadFn: async () => {
      try {
        action('开始加载 JS Bundle')()
        await sleep(3000)
        action('JS Bundle 加载完成')()
        return 'JS loaded'
      } catch (error: any) {
        return `JS failed: ${error.message}`
      }
    },
    priority: 1,
  })

  controller.add({
    name: 'font',
    loadFn: async () => {
      try {
        action('开始加载字体')()
        await sleep(2000)
        action('字体加载完成')()
        return 'Font loaded'
      } catch (error: any) {
        return `Font failed: ${error.message}`
      }
    },
    priority: 2,
  })

  controller.add({
    name: 'image-1',
    loadFn: async () => {
      try {
        action('开始加载图片1')()
        await sleep(2000)
        action('图片1加载完成')()
        return 'Image 1 loaded'
      } catch (error: any) {
        return `Image 1 failed: ${error.message}`
      }
    },
    priority: 3,
  })

  controller.add({
    name: 'image-2',
    loadFn: async () => {
      try {
        action('开始加载图片2')()
        await sleep(1500)
        action('图片2加载完成')()
        return 'Image 2 loaded'
      } catch (error: any) {
        return `Image 2 failed: ${error.message}`
      }
    },
    priority: 3,
  })

  action('添加5个资源(CSS/JS/Font/Images), 按优先级并发加载')()
  action('状态:')(controller.getStatus())

  await controller.load()

  const results = {
    'css-bundle': controller.resourceMap['css-bundle'].current,
    'js-bundle': controller.resourceMap['js-bundle'].current,
    font: controller.resourceMap['font'].current,
    'image-1': controller.resourceMap['image-1'].current,
    'image-2': controller.resourceMap['image-2'].current,
  }

  action('所有资源加载完成, 结果:')(results)
}

export default realConcurrencyDemo
