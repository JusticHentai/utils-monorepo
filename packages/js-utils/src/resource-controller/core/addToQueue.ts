import { LoadQueue, ResourceOptions } from '../interface'

/**
 * 将资源添加到加载队列
 *
 * 支持有优先级和无优先级的资源：
 * - 有优先级：按数值大小排序，数值越小优先级越高
 * - 无优先级：使用 Infinity 作为最低优先级，排在所有有优先级资源后面
 *
 * @param queue - 加载队列
 * @param options - 资源配置选项
 */
export const addToQueue = (queue: LoadQueue, options: ResourceOptions) => {
  const { priorityGroups, sortedPriorities } = queue
  // 无优先级资源使用 Infinity 表示最低优先级
  const priority = options.priority ?? Infinity

  // 检查是否已存在相同优先级的组
  const priorityResources = priorityGroups.get(priority)

  if (priorityResources) {
    // 已存在相同优先级的组，直接添加资源
    priorityResources.push(options)
  } else {
    // 创建新的优先级组
    priorityGroups.set(priority, [options])

    // 将优先级插入到排序列表的正确位置
    insertPriorityInOrder(sortedPriorities, priority)
  }
}

/**
 * 将优先级按顺序插入到已排序的优先级列表中
 *
 * @param sortedPriorities - 已排序的优先级列表
 * @param priority - 要插入的优先级
 */
const insertPriorityInOrder = (
  sortedPriorities: number[],
  priority: number
) => {
  // 使用二分查找找到插入位置，提高性能
  let left = 0
  let right = sortedPriorities.length

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (sortedPriorities[mid] < priority) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  // 在找到的位置插入优先级
  sortedPriorities.splice(left, 0, priority)
}
