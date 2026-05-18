import { action } from 'storybook/actions'

import EarlyErrorQueue, {
  EARLY_ERROR_FLUSH_REASON,
  EARLY_ERROR_TRANSPORT,
} from '../../../packages/element-utils/src/earlyErrorQueue'

const createFlushDemo = () => {
  return async () => {
    const queue = new EarlyErrorQueue()
    const capturedCount = queue.captureGlobal()

    const result = await queue.flush({
      url: '/storybook/mock-monitor/errors',
      transport: EARLY_ERROR_TRANSPORT.FETCH,
      reason: EARLY_ERROR_FLUSH_REASON.INIT,
      context: {
        appId: 'storybook-demo',
        release: '2026.05.12-demo',
        route: location.pathname,
        userId: 'storybook-user',
        sessionId: 'storybook-session',
        platform: 'web',
      },
      beforeSend: (payload) => {
        action('flush payload')(payload)
        return false
      },
    })

    action('flush 结果')({
      capturedCount,
      result,
    })
  }
}

export default createFlushDemo
