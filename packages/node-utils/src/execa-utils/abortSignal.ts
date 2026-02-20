/**
 * 获取 AbortController 的信号
 * 如果提供了外部信号，则使用它；否则创建一个新的
 * @param signal - 外部 AbortSignal
 */
export const getAbortSignal = (signal?: AbortSignal): AbortController => {
  const controller = new AbortController()

  if (signal) {
    if (signal.aborted) {
      controller.abort(signal.reason)
    } else {
      signal.addEventListener('abort', () => {
        controller.abort(signal.reason)
      }, { once: true })
    }
  }

  return controller
}

/**
 * 等待 AbortSignal 被中止
 * @param signal - AbortSignal
 * @returns Promise，当信号被中止时解决
 */
export const waitForAbort = (signal: AbortSignal): Promise<void> => {
  if (signal.aborted) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    signal.addEventListener('abort', () => resolve(), { once: true })
  })
}
