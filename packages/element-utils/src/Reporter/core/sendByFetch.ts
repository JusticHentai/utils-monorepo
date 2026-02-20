import type { ReportData } from '../interface'

/**
 * 使用 Fetch 发送
 */
const sendByFetch = async (
  url: string,
  data: ReportData[]
): Promise<boolean> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      keepalive: true,
    })
    return response.ok
  } catch {
    return false
  }
}

export default sendByFetch
