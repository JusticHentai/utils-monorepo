import { LoadQueue, ResourceMap, ResourceOptions } from './types'
import addNoPriorityToQueue from './utils/addNoPriorityToQueue'
import addPriorityToQueue from './utils/addPriorityToQueue'
import createPromiseLockAndKey from './utils/createPromiseLockAndKey'
import loadCurrent from './utils/loadCurrent'

export default class ResourceController {
  resourceMap: ResourceMap = {}
  loadQueue: LoadQueue = {
    priorityList: [],
    loadList: [],
  }
  loadQueueImmediately: LoadQueue = {
    priorityList: [],
    loadList: [],
  }
  lock = {
    loadImmediately: true,
  }

  add = (options: ResourceOptions) => {
    const { priority, name } = options

    // 去重
    if (this.resourceMap[name]) {
      return
    }

    priority
      ? addPriorityToQueue(this.loadQueue, options)
      : addNoPriorityToQueue(this.loadQueue, options)

    this.resourceMap[name] = createPromiseLockAndKey()
  }

  load = async () => {
    const { loadList } = this.loadQueue

    this.loadQueue = {
      priorityList: [],
      loadList: [],
    }

    for (let j = 0; j < loadList.length; j++) {
      const currentList = loadList[j]

      const promiseList = []
      const nameList = []

      for (const { name, loadFn } of currentList) {
        const promise = loadFn()
        promiseList.push(promise)
        nameList.push(name)
      }

      const resList = await Promise.all(promiseList)

      for (let i = 0; i < resList.length; i++) {
        const name = nameList[i]
        const res = resList[i]

        this.resourceMap[name]['current'] = res
        this.resourceMap[name]['resolve']() // 解锁 promise
      }
    }
  }

  addImmediately = async (options: ResourceOptions) => {
    const { priority, name } = options

    // 去重
    if (this.resourceMap[name]) {
      return
    }

    priority
      ? addPriorityToQueue(this.loadQueueImmediately, options)
      : addNoPriorityToQueue(this.loadQueueImmediately, options)

    this.resourceMap[name] = createPromiseLockAndKey()

    await this.loadImmediately()
  }

  loadImmediately = async () => {
    if (!this.lock['loadImmediately']) {
      return
    }

    this.lock['loadImmediately'] = false

    await loadCurrent(this.loadQueueImmediately, this.resourceMap)

    this.lock['loadImmediately'] = true
  }

  reset = () => {
    this.loadQueue = {
      priorityList: [],
      loadList: [],
    }
    this.resourceMap = {}
  }
}
