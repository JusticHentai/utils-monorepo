import isBrowser from '../../isBrowser'
import type {
  EarlyErrorEvent,
  EarlyErrorGlobalQueue,
  TakeGlobalEarlyErrorsOptions,
} from '../interface'

const DEFAULT_GLOBAL_NAME = '__EARLY_ERROR_QUEUE__'

type WindowWithEarlyErrorQueue = Window &
  Record<string, EarlyErrorGlobalQueue | undefined>

/** 从 window 全局早期错误队列读取并清空事件 */
const takeGlobalEarlyErrors = (
  options: TakeGlobalEarlyErrorsOptions = {}
): EarlyErrorEvent[] => {
  if (!isBrowser()) return []

  const { globalName = DEFAULT_GLOBAL_NAME, stopAfterTake = true } = options
  const queue = (window as unknown as WindowWithEarlyErrorQueue)[globalName]
  if (!queue?.take) return []

  const events = queue.take()

  if (stopAfterTake) {
    queue.stop?.()
  }

  return events
}

export default takeGlobalEarlyErrors
