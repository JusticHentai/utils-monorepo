import ResourceController from '../../../packages/js-utils/src/resource-controller'
import sleep from '../../../packages/js-utils/src/sleep'

const addImmediatelyDemo = async () => {
  const controller = new ResourceController()

  await controller.addImmediately({
    name: 'resource1',
    loadFn: async () => {
      await sleep(100)
      return 'resource1 loaded immediately'
    },
  })

  return await controller.resourceMap['resource1'].promise
}

export default addImmediatelyDemo
