import isBrowser from '../../isBrowser'
import type { EarlyErrorConnection, EarlyErrorViewport } from '../interface'

interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: string
    downlink?: number
    rtt?: number
    saveData?: boolean
  }
}

const getViewport = (): EarlyErrorViewport | undefined => {
  if (!isBrowser()) return undefined

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

const getConnection = (): EarlyErrorConnection | undefined => {
  if (!isBrowser()) return undefined

  const connection = (window.navigator as NavigatorWithConnection).connection
  if (!connection) return undefined

  return {
    effectiveType: connection.effectiveType,
    downlink: connection.downlink,
    rtt: connection.rtt,
    saveData: connection.saveData,
  }
}

/** 创建早期错误基础字段 */
const createBaseEvent = () => {
  const timestamp = Date.now()
  const browser = isBrowser()

  return {
    timestamp,
    pageUrl: browser ? window.location.href : '',
    userAgent: browser ? window.navigator.userAgent : '',
    viewport: getViewport(),
    connection: getConnection(),
    count: 1,
    firstSeen: timestamp,
    lastSeen: timestamp,
  }
}

export default createBaseEvent
