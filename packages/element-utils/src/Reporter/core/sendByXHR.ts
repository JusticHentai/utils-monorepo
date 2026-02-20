import type { ReportData } from '../interface'

/**
 * 使用 XHR 发送
 */
const sendByXHR = (url: string, data: ReportData[]): Promise<boolean> => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        resolve(xhr.status >= 200 && xhr.status < 300)
      }
    }

    xhr.onerror = () => resolve(false)

    try {
      xhr.send(JSON.stringify(data))
    } catch {
      resolve(false)
    }
  })
}

export default sendByXHR
