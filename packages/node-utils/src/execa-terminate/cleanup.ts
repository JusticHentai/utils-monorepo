import { onExit } from 'signal-exit'
import type { ChildProcess } from 'node:child_process'
import type { CommonOptions } from '@/execa-types'

/**
 * 当前进程退出时清理子进程
 * @param subprocess - 子进程
 * @param options - 选项
 * @param controller - AbortController
 */
export const cleanupOnExit = (
  subprocess: ChildProcess,
  options: CommonOptions,
  controller: AbortController
): void => {
  const { cleanup, detached } = options

  if (!cleanup || detached) {
    return
  }

  const removeExitHandler = onExit(() => {
    subprocess.kill()
  })

  // 当子进程结束时移除退出处理程序
  controller.signal.addEventListener('abort', () => {
    removeExitHandler()
  }, { once: true })
}
