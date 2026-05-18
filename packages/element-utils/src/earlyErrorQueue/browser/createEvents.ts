import isBrowser from '../../isBrowser'
import normalizeUnknownError from '../core/normalizeUnknownError'
import type {
  EarlyBrowserReportEvent,
  EarlyJSErrorEvent,
  EarlyResourceErrorEvent,
  EarlyUnhandledRejectionEvent,
} from '../interface'
import { EARLY_ERROR_TYPE } from '../interface'
import createBaseEvent from './createBaseEvent'

interface ResourceTarget {
  tagName?: string
  src?: string
  href?: string
  outerHTML?: string
}

interface BrowserReportLike {
  type?: string
  url?: string
  body?: {
    toJSON?: () => unknown
  }
}

const isResourceTarget = (
  target: EventTarget | null
): target is EventTarget & ResourceTarget => {
  return Boolean(target && 'tagName' in target)
}

const isWindowTarget = (target: EventTarget | null): boolean => {
  return isBrowser() && target === window
}

const isErrorEvent = (event: ErrorEvent | Event): event is ErrorEvent => {
  return (
    isBrowser() &&
    typeof ErrorEvent !== 'undefined' &&
    event instanceof ErrorEvent
  )
}

/** 从 error 事件创建早期错误 */
export const createErrorEvent = (
  event: ErrorEvent | Event
): EarlyJSErrorEvent | EarlyResourceErrorEvent | null => {
  const target = event.target

  if (isResourceTarget(target) && !isWindowTarget(target)) {
    const tagName = target.tagName
    const resourceUrl = target.src ?? target.href

    return {
      ...createBaseEvent(),
      type: EARLY_ERROR_TYPE.RESOURCE,
      message: `Failed to load ${String(tagName ?? 'resource').toLowerCase()}: ${resourceUrl ?? ''}`,
      tagName,
      resourceUrl,
      outerHTML: target.outerHTML,
    }
  }

  if (isErrorEvent(event)) {
    const normalizedError = normalizeUnknownError(event.error)

    return {
      ...createBaseEvent(),
      type: EARLY_ERROR_TYPE.JS,
      message: event.message || normalizedError.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: normalizedError.stack,
    }
  }

  return null
}

/** 从 unhandledrejection 事件创建早期错误 */
export const createUnhandledRejectionEvent = (
  event: PromiseRejectionEvent
): EarlyUnhandledRejectionEvent => {
  const normalizedReason = normalizeUnknownError(event.reason)

  return {
    ...createBaseEvent(),
    type: EARLY_ERROR_TYPE.UNHANDLED_REJECTION,
    message: normalizedReason.message,
    reasonType: normalizedReason.reasonType,
    stack: normalizedReason.stack,
  }
}

/** 从 Reporting API report 创建早期错误 */
export const createBrowserReportEvent = (
  report: BrowserReportLike
): EarlyBrowserReportEvent => {
  const reportType = report.type
  const body = report.body?.toJSON?.() ?? report.body

  return {
    ...createBaseEvent(),
    type: EARLY_ERROR_TYPE.BROWSER_REPORT,
    message: reportType ? `Browser report: ${reportType}` : 'Browser report',
    reportType,
    reportUrl: report.url,
    body,
  }
}
