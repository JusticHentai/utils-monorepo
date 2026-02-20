import type { ReportData } from '../interface'

/**
 * 使用 Image 发送（仅支持单条小数据）
 */
const sendByImage = (url: string, data: ReportData[]): boolean => {
  try {
    const img = new Image()
    const params = encodeURIComponent(JSON.stringify(data))
    img.src = `${url}?data=${params}`
    return true
  } catch {
    return false
  }
}

export default sendByImage
