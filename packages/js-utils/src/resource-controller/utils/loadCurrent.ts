import { LoadQueue, ResourceMap, ResourceOptions } from '../interface'

/**
 * 加载当前资源
 * @param loadQueue 队列
 * @param resourceMap 资源映射
 */
const loadCurrent = async (loadQueue: LoadQueue, resourceMap: ResourceMap) => {
  const loadList = loadQueue.loadList
  const currentLoadList = loadList[0]
  const priorityList = loadQueue.priorityList

  // 所有队列处理完毕
  if (!loadList.length) {
    return
  }

  // 跑完当前优先级队列 继续下一个
  if (!currentLoadList.length) {
    priorityList?.shift()
    loadList.shift()

    await loadCurrent(loadQueue, resourceMap)

    return
  }

  const { name, loadFn } = currentLoadList.shift() as ResourceOptions

  const current = await loadFn()

  resourceMap[name].current = current
  resourceMap[name].resolve()

  await loadCurrent(loadQueue, resourceMap)
}

export default loadCurrent
