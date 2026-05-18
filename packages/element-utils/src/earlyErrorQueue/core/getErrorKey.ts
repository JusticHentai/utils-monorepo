import type { EarlyErrorEvent } from '../interface'
import { EARLY_ERROR_TYPE } from '../interface'

const getStackTop = (stack?: string): string => {
  return String(stack ?? '').split('\n')[0] ?? ''
}

/** 按错误类型分开处理，每个错误将对象内容拼成 xxx|xxx 用于去重 */
const getErrorKey = (event: EarlyErrorEvent): string => {
  if (event.type === EARLY_ERROR_TYPE.RESOURCE) {
    return [event.type, event.tagName, event.resourceUrl, event.message].join(
      '|'
    )
  }

  if (event.type === EARLY_ERROR_TYPE.JS) {
    return [
      event.type,
      event.message,
      event.filename,
      event.lineno,
      event.colno,
      getStackTop(event.stack),
    ].join('|')
  }

  if (event.type === EARLY_ERROR_TYPE.UNHANDLED_REJECTION) {
    return [event.type, event.message, getStackTop(event.stack)].join('|')
  }

  return [event.type, event.reportType, event.reportUrl, event.message].join(
    '|'
  )
}

export default getErrorKey
