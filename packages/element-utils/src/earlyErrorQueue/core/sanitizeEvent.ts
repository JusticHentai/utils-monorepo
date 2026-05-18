import truncateText from '../../truncateText'
import type { EarlyErrorEvent } from '../interface'
import { EARLY_ERROR_TYPE } from '../interface'
import sanitizeUrl from './sanitizeUrl'

type SanitizeEventOptions = {
  maxMessageLength: number
  maxStackLength: number
  maxHtmlLength: number
  sensitiveKeys: RegExp
}

/** 入队前截断和隐私过滤 */
const sanitizeEvent = (
  event: EarlyErrorEvent,
  options: SanitizeEventOptions
): EarlyErrorEvent => {
  const message = truncateText(event.message, options.maxMessageLength)
  const pageUrl =
    sanitizeUrl(
      event.pageUrl,
      options.sensitiveKeys,
      options.maxMessageLength
    ) ?? ''
  const base = {
    ...event,
    message,
    pageUrl,
  }

  if (event.type === EARLY_ERROR_TYPE.JS) {
    const filename = sanitizeUrl(
      event.filename,
      options.sensitiveKeys,
      options.maxMessageLength,
      base.pageUrl
    )
    const stack = truncateText(event.stack, options.maxStackLength)

    return {
      ...base,
      type: EARLY_ERROR_TYPE.JS,
      filename,
      lineno: event.lineno,
      colno: event.colno,
      stack,
    }
  }

  if (event.type === EARLY_ERROR_TYPE.RESOURCE) {
    const resourceUrl = sanitizeUrl(
      event.resourceUrl,
      options.sensitiveKeys,
      options.maxMessageLength,
      base.pageUrl
    )
    const outerHTML = truncateText(event.outerHTML, options.maxHtmlLength)

    return {
      ...base,
      type: EARLY_ERROR_TYPE.RESOURCE,
      tagName: event.tagName,
      resourceUrl,
      outerHTML,
    }
  }

  if (event.type === EARLY_ERROR_TYPE.UNHANDLED_REJECTION) {
    const stack = truncateText(event.stack, options.maxStackLength)

    return {
      ...base,
      type: EARLY_ERROR_TYPE.UNHANDLED_REJECTION,
      reasonType: event.reasonType,
      stack,
    }
  }

  const reportUrl = sanitizeUrl(
    event.reportUrl,
    options.sensitiveKeys,
    options.maxMessageLength,
    base.pageUrl
  )

  return {
    ...base,
    type: EARLY_ERROR_TYPE.BROWSER_REPORT,
    reportType: event.reportType,
    reportUrl,
    body: event.body,
  }
}

export default sanitizeEvent
