import ResourceController from '../../../packages/js-utils/src/resource-controller'
import sleep from '../../../packages/js-utils/src/sleep'

const addDemo = async () => {
  const controller = new ResourceController()

  controller.add({
    name: 'resource1',
    loadFn: async () => {
      await sleep(100)
      return 'resource1 loaded'
    },
  })

  controller.add({
    name: 'resource2',
    loadFn: async () => {
      await sleep(100)
      return 'resource2 loaded'
    },
    priority: 1,
  })

  await controller.load()

  return {
    resource1: await controller.resourceMap['resource1'].promise,
    resource2: await controller.resourceMap['resource2'].promise,
  }
}

export default addDemo
