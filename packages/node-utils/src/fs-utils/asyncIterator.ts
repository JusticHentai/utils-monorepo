import type fs from 'node:fs'

/**
 * 并发处理异步迭代器中的每一项
 * 用于高效地并行处理目录中的文件
 * @param iterator - 异步迭代器（如 fs.opendir 返回的结果）
 * @param fn - 处理每一项的异步函数
 */
const asyncIteratorConcurrentProcess = async (
  iterator: fs.Dir,
  fn: (item: fs.Dirent) => Promise<void>
): Promise<void> => {
  const promises: Promise<Error | null>[] = []

  for await (const item of iterator) {
    promises.push(
      fn(item).then(
        () => null,
        (err: Error) => err ?? new Error('unknown error')
      )
    )
  }

  await Promise.all(
    promises.map((promise) =>
      promise.then((possibleErr) => {
        if (possibleErr !== null) throw possibleErr
      })
    )
  )
}

export { asyncIteratorConcurrentProcess }
