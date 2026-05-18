import { action } from 'storybook/actions'

import {
  EARLY_ERROR_TYPE,
  type EarlyErrorGlobalQueue,
} from '../../../packages/element-utils/src/earlyErrorQueue'

declare global {
  interface Window {
    __EARLY_ERROR_QUEUE__?: EarlyErrorGlobalQueue
  }
}

const createBootstrapDemo = () => {
  return () => {
    const events: ReturnType<EarlyErrorGlobalQueue['take']> = []

    window.__EARLY_ERROR_QUEUE__ = {
      push: (event) => {
        const timestamp = Date.now()
        const stack = 'stack' in event ? event.stack : undefined

        events.push({
          type: EARLY_ERROR_TYPE.JS,
          message: String(event.message ?? 'storybook early error'),
          timestamp,
          pageUrl: location.href,
          userAgent: navigator.userAgent,
          count: 1,
          firstSeen: timestamp,
          lastSeen: timestamp,
          stack: String(stack ?? '').slice(0, 8192),
        })
      },
      take: () => {
        const copy = events.slice()
        events.length = 0
        return copy
      },
      peek: () => events.slice(),
      stop: () => action('bootstrap stop')('已停止早期监听'),
      getStats: () => ({
        count: events.length,
        bytes: JSON.stringify(events).length,
        dropped: 0,
      }),
    }

    window.__EARLY_ERROR_QUEUE__.push({
      type: EARLY_ERROR_TYPE.JS,
      message: 'script 加载前的错误',
      stack: 'Error: script 加载前的错误\n    at inline-script:1:1',
    })

    Promise.reject(new Error('script 加载前的 Promise rejection')).catch(
      (error: Error) => {
        window.__EARLY_ERROR_QUEUE__?.push({
          type: EARLY_ERROR_TYPE.UNHANDLED_REJECTION,
          message: error.message,
          stack: error.stack,
        })
      }
    )

    action('bootstrap 队列')({
      events: window.__EARLY_ERROR_QUEUE__.peek?.(),
      stats: window.__EARLY_ERROR_QUEUE__.getStats?.(),
    })
  }
}

export default createBootstrapDemo
