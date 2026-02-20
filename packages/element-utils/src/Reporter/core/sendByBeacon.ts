import type { ReportData } from '../interface'
import sendByFetch from './sendByFetch'

/**
 * 使用 Beacon API 发送，失败时自动降级到 Fetch
 */
const sendByBeacon = async (
  url: string,
  data: ReportData[]
): Promise<boolean> => {
  if (!navigator.sendBeacon) return sendByFetch(url, data)

  try {
    const blob = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    })
    const success = navigator.sendBeacon(url, blob)
    if (success) return true
    return sendByFetch(url, data)
  } catch {
    return sendByFetch(url, data)
  }
}

export default sendByBeacon
