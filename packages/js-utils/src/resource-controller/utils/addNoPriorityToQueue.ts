import { LoadQueue, ResourceOptions } from '../interface'

/**
 * 添加没有优先级的资源进队列
 * @param loadQueue 队列
 * @param options 资源选项
 */
const addNoPriorityToQueue = (
  loadQueue: LoadQueue,
  options: ResourceOptions
) => {
  const { priorityList, loadList } = loadQueue

  // 取当前优先级 list 长度 + 1 的位置
  // 有数组就放入
  // 没有新建个 push 进到最后

  if (loadList[priorityList.length]) {
    loadList[priorityList.length].push(options)
  } else {
    loadList.push([options])
  }
}

export default addNoPriorityToQueue
