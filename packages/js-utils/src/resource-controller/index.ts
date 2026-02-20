import createPromiseController from '../createPromiseController'
import { addToQueue } from './core/addToQueue'
import { QueueProcessor } from './core/QueueProcessor'
import {
  LoadQueue,
  ResourceControllerOptions,
  ResourceMap,
  ResourceOptions,
} from './interface'

/**
 * 资源控制器
 *
 * 用于管理异步资源的加载，支持：
 * - 优先级队列：按优先级顺序加载资源
 * - 并发限制：控制同时加载的资源数量
 * - 动态队列：支持运行时添加新任务
 * - 资源去重：相同名称的资源只加载一次
 */
export default class ResourceController {
  /** 资源映射表，存储所有已注册资源的状态和结果 */
  resourceMap: ResourceMap = {}

  /** 资源加载队列，统一管理所有待加载资源 */
  private queue: LoadQueue = {
    priorityGroups: new Map(),
    sortedPriorities: [],
  }

  /** 队列处理器，负责并发控制和任务调度 */
  private queueProcessor: QueueProcessor

  /** 是否自动处理队列 */
  private isAutoProcess = false

  constructor(options: ResourceControllerOptions = {}) {
    const { maxConcurrency = 3 } = options
    this.queueProcessor = new QueueProcessor(maxConcurrency)
  }

  /**
   * 添加资源到队列
   * 资源不会立即加载，需要调用 load() 方法触发加载
   *
   * @param options - 资源配置选项
   */
  add = (options: ResourceOptions) => {
    this.addToQueue(options)
  }

  /**
   * 开始处理队列中的所有资源
   * 按优先级顺序加载，支持并发限制
   */
  load = async () => {
    await this.queueProcessor.processQueue(this.queue, this.resourceMap)
  }

  /**
   * 添加资源并立即开始加载
   * 适用于需要尽快获取的资源
   *
   * @param options - 资源配置选项
   */
  addAndLoadImmediately = async (options: ResourceOptions) => {
    this.addToQueue(options)
    await this.queueProcessor.processQueue(this.queue, this.resourceMap)
  }

  /**
   * 启用自动处理模式
   * 在此模式下，添加任务后会自动开始处理队列
   */
  enableAutoProcess = () => {
    this.isAutoProcess = true
  }

  /**
   * 禁用自动处理模式
   */
  disableAutoProcess = () => {
    this.isAutoProcess = false
  }

  /**
   * 添加资源到队列的通用方法
   * @param options - 资源配置选项
   */
  private addToQueue = async (options: ResourceOptions) => {
    const { name } = options

    // 资源去重：已存在则跳过
    if (this.resourceMap[name]) {
      return
    }

    // 添加到队列
    addToQueue(this.queue, options)

    // 创建资源控制器，用于等待资源加载完成
    this.resourceMap[name] = createPromiseController()

    // 如果未启用自动处理，直接返回
    if (!this.isAutoProcess) {
      return
    }

    // 如果启用了自动处理，立即开始处理队列
    this.queueProcessor.processQueue(this.queue, this.resourceMap)
  }

  /**
   * 获取当前队列和处理器状态
   */
  getStatus = () => {
    const queueStatus = this.queueProcessor.getStatus()

    const totalPending = Array.from(this.queue.priorityGroups.values()).reduce(
      (sum, resources) => sum + resources.length,
      0
    )

    const totalPriorities = this.queue.sortedPriorities.slice()

    return {
      ...queueStatus,
      totalPending,
      totalPriorities,
      totalResources: Object.keys(this.resourceMap).length,
      isAutoProcess: this.isAutoProcess,
    }
  }

  /**
   * 设置最大并发数
   * @param maxConcurrency - 最大并发数
   */
  setMaxConcurrency = (maxConcurrency: number) => {
    this.queueProcessor.setMaxConcurrency(maxConcurrency)
  }

  /**
   * 重置控制器状态
   * 清空所有队列和资源映射表
   */
  reset = () => {
    this.queue = {
      priorityGroups: new Map(),
      sortedPriorities: [],
    }
    this.resourceMap = {}
    this.isAutoProcess = false
  }
}
