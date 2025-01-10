import { LoadQueue, ResourceOptions } from '../types'

const addPriorityToQueue = (loadQueue: LoadQueue, options: ResourceOptions) => {
  const { priorityList, loadList } = loadQueue
  const priority = options.priority as number

  const index = priorityList.indexOf(priority)

  // 如果之前已经有这个优先级的列表 则直接加入
  if (index !== -1) {
    loadList[index].push(options)
    return
  }

  // 没有则插入到特定下标
  let indexForNewPriority = 0
  for (let i = 0; i < priorityList.length; i++) {
    const isEnd = i === priorityList.length - 1

    if (priorityList[i] < priority && !isEnd) {
      continue
    }

    indexForNewPriority = priorityList[i] < priority ? i + 1 : i
    break
  }

  priorityList.splice(indexForNewPriority, 0, priority)
  loadList.splice(indexForNewPriority, 0, [options])
}

export default addPriorityToQueue
