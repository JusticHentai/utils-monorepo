import {
  LoadQueue,
  ResourceMap,
  ResourceOptions,
  RunningTask,
} from '../interface'

/**
 * 队列处理器
 *
 * 支持并发限制和动态队列管理：
 * - 维护最大并发数限制
 * - 支持动态添加任务到队列
 * - 按优先级顺序处理任务
 * - 任务完成后自动启动下一个任务
 *
 * 重要：传入的 loadFn 必须自己处理完所有错误，不应该抛出未捕获的异常
 */
export class QueueProcessor {
  /** 最大并发数 */
  private maxConcurrency: number
  /** 当前正在运行的任务 */
  private runningTasks: Map<string, RunningTask> = new Map()
  /** 是否正在处理队列 */
  private isProcessing = false
  /** 任务添加通知器 */
  private taskAddedNotifier: (() => void) | null = null

  constructor(maxConcurrency: number = 3) {
    this.maxConcurrency = maxConcurrency
  }

  /**
   * 处理队列
   *
   * @param queue - 加载队列
   * @param resourceMap - 资源映射表
   */
  processQueue = async (queue: LoadQueue, resourceMap: ResourceMap) => {
    // 如果已经在处理，通知有新任务添加，然后直接返回
    if (this.isProcessing) {
      this.notifyTaskAdded()
      return
    }

    this.isProcessing = true

    // 持续处理直到队列为空且没有运行中的任务
    while (this.hasTasksToProcess(queue) || this.runningTasks.size > 0) {
      // 启动新任务直到达到并发限制
      this.startNewTasks(queue, resourceMap)

      // 如果没有运行中的任务，直接继续塞满下一个任务队列
      if (this.runningTasks.size === 0) {
        continue
      }

      await this.waitForAnyTaskCompletionOrNewTask()
    }

    this.isProcessing = false
  }

  /**
   * 检查是否还有任务需要处理
   */
  private hasTasksToProcess = (queue: LoadQueue): boolean => {
    const { priorityGroups } = queue

    for (const resources of priorityGroups.values()) {
      if (resources.length > 0) {
        return true
      }
    }

    return false
  }

  /**
   * 启动新任务直到达到并发限制
   */
  private startNewTasks = (queue: LoadQueue, resourceMap: ResourceMap) => {
    while (this.runningTasks.size < this.maxConcurrency) {
      const nextTask = this.getNextTask(queue)

      if (!nextTask) {
        break // 没有更多任务可启动
      }

      this.startTask(nextTask, resourceMap)
    }
  }

  /**
   * 获取下一个要执行的任务（按优先级）
   */
  private getNextTask = (queue: LoadQueue): ResourceOptions | null => {
    const { priorityGroups, sortedPriorities } = queue

    // 按优先级顺序查找任务
    for (const priority of sortedPriorities) {
      const resources = priorityGroups.get(priority)

      if (!resources || resources.length === 0) {
        continue
      }

      const task = resources.shift()! // 取出第一个任务

      // 如果该优先级组还有任务，直接返回，不清理数据结构
      if (resources.length !== 0) {
        return task
      }

      priorityGroups.delete(priority)

      const index = sortedPriorities.indexOf(priority)

      if (index > -1) {
        sortedPriorities.splice(index, 1)
      }

      return task
    }

    return null
  }

  /**
   * 启动单个任务
   */
  private startTask = async (
    options: ResourceOptions,
    resourceMap: ResourceMap
  ) => {
    const { name, loadFn, priority = Infinity } = options

    // 创建任务 Promise
    const taskPromise = this.createTaskPromise(name, loadFn, resourceMap)

    // 记录运行中的任务
    const runningTask: RunningTask = {
      name,
      priority,
      promise: taskPromise,
    }
    this.runningTasks.set(name, runningTask)

    // 任务完成后自动清理
    await taskPromise
    this.runningTasks.delete(name)
  }

  /**
   * 创建任务 Promise
   *
   * 注意：loadFn 必须自己处理完所有错误，不应该抛出未捕获的异常
   */
  private createTaskPromise = async (
    name: string,
    loadFn: () => Promise<any>,
    resourceMap: ResourceMap
  ): Promise<void> => {
    const result = await loadFn()

    // 保存结果并解锁等待的 Promise
    resourceMap[name].current = result
    resourceMap[name].resolve()
  }

  /**
   * 等待任意一个任务完成或新任务添加
   */
  private waitForAnyTaskCompletionOrNewTask = async (): Promise<void> => {
    if (this.runningTasks.size === 0) {
      return
    }

    const promises = Array.from(this.runningTasks.values()).map(
      (task) => task.promise
    )

    // 创建新任务通知 Promise
    const newTaskPromise = new Promise<void>((resolve) => {
      this.taskAddedNotifier = resolve
    })

    // 等待任务完成或新任务添加
    await Promise.race([...promises, newTaskPromise])

    // 清理通知器
    this.taskAddedNotifier = null
  }

  /**
   * 通知有新任务添加
   */
  private notifyTaskAdded = () => {
    this.taskAddedNotifier?.()
  }

  /**
   * 获取当前运行状态信息
   */
  getStatus = () => {
    return {
      maxConcurrency: this.maxConcurrency,
      runningCount: this.runningTasks.size,
      runningTasks: Array.from(this.runningTasks.values()).map((task) => ({
        name: task.name,
        priority: task.priority,
      })),
      isProcessing: this.isProcessing,
    }
  }

  /**
   * 更新最大并发数
   */
  setMaxConcurrency = (maxConcurrency: number) => {
    this.maxConcurrency = Math.max(1, maxConcurrency)
  }
}
