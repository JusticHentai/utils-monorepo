import { action } from 'storybook/actions'

import EarlyErrorQueue, {
  EARLY_ERROR_TYPE,
} from '../../../packages/element-utils/src/earlyErrorQueue'

const queueDemo = () => {
  const queue = new EarlyErrorQueue({
    maxCount: 2,
    maxBytes: 4096,
  })
  const timestamp = Date.now()

  queue.push({
    type: EARLY_ERROR_TYPE.JS,
    message: 'Cannot read properties of undefined',
    timestamp,
    pageUrl: 'https://example.com/?token=secret&tab=home',
    userAgent: navigator.userAgent,
    count: 1,
    firstSeen: timestamp,
    lastSeen: timestamp,
    filename: 'https://cdn.example.com/app.js?token=secret',
    lineno: 10,
    colno: 20,
    stack: 'Error: Cannot read properties of undefined\n    at Home.tsx:10:20',
  })

  queue.push({
    type: EARLY_ERROR_TYPE.JS,
    message: 'Cannot read properties of undefined',
    timestamp: timestamp + 1,
    pageUrl: 'https://example.com/?token=secret&tab=home',
    userAgent: navigator.userAgent,
    count: 1,
    firstSeen: timestamp + 1,
    lastSeen: timestamp + 1,
    filename: 'https://cdn.example.com/app.js?token=secret',
    lineno: 10,
    colno: 20,
    stack: 'Error: Cannot read properties of undefined\n    at Home.tsx:10:20',
  })

  queue.push({
    type: EARLY_ERROR_TYPE.RESOURCE,
    message: 'Failed to load script: https://cdn.example.com/missing.js',
    timestamp: timestamp + 2,
    pageUrl: location.href,
    userAgent: navigator.userAgent,
    count: 1,
    firstSeen: timestamp + 2,
    lastSeen: timestamp + 2,
    tagName: 'SCRIPT',
    resourceUrl: 'https://cdn.example.com/missing.js?sid=secret',
  })

  action('队列内容')(queue.peek())
}

export default queueDemo
