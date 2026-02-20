import type { BatchActions, BatchOptions } from './interface'

/**
 * 创建批次处理器
 *
 * 将数据按批次大小或延迟时间聚合后统一回调。
 *
 * @param callback - 批次回调函数
 * @param options - 批次配置
 * @returns 批次操作方法
 */
const createBatch = <T>(
  callback: (items: T[]) => void,
  options: BatchOptions
): BatchActions<T> => {
  const { batchSize, batchDelay } = options

  let batch: T[] = []
  let timer: ReturnType<typeof setTimeout> | null = null

  // 刷新批次, 回调并清空定时器
  const flush = () => {
    if (batch.length <= 0) {
      return
    }

    callback([...batch])
    batch = []

    if (!timer) {
      return
    }

    clearTimeout(timer)
    timer = null
  }

  // 添加数据到批次
  const add = (items: T[]) => {
    batch.push(...items)

    // 如果批次大小达到阈值, 刷新批次
    if (batch.length >= batchSize) {
      flush()

      return
    }

    // 如果定时器已存在, 不用新建
    if (timer) {
      return
    }

    // 如果定时器不存在, 设置定时器执行刷新批次
    timer = setTimeout(flush, batchDelay)
  }

  return { flush, add }
}

export default createBatch
