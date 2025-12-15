/**
 * 创建 Promise 锁和 Key
 * 锁：用于等待资源加载完成
 * Key：用于获取资源
 */
const createPromiseLockAndKey = () => {
  let promiseKey: (...params: any[]) => void = () => {}

  const promiseLock = new Promise((resolve) => {
    promiseKey = resolve
  })

  const promise = async () => {
    await promiseLock

    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 0)
    })
  }

  return {
    resolve: promiseKey,
    promise: promise(),
  }
}

export default createPromiseLockAndKey
