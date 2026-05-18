import isBrowser from '../../isBrowser'
import type {
  EarlyErrorContext,
  EarlyErrorEvent,
  EnrichedEarlyErrorEvent,
} from '../interface'
import { EARLY_ERROR_FLUSH_REASON } from '../interface'

/** 补齐早期错误上下文 */
const enrichEarlyErrors = (
  events: EarlyErrorEvent[],
  context: EarlyErrorContext = {},
  reason: EARLY_ERROR_FLUSH_REASON = EARLY_ERROR_FLUSH_REASON.INIT
): EnrichedEarlyErrorEvent[] => {
  const flushedAt = Date.now()
  const route = isBrowser() ? window.location.pathname : undefined

  return events.map((event) => ({
    ...event,
    ...context,
    route: context.route ?? route,
    userId: context.userId ?? 'anonymous',
    flushedAt,
    flushReason: reason,
    source: 'early_error_queue',
  }))
}

export default enrichEarlyErrors
