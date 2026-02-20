import toBlob, { ToBlobOptions } from './toBlob'

/**
 * 画布下载配置选项
 *
 * 将画布内容导出为图片文件并触发浏览器下载。
 * 支持 PNG、JPEG、WebP 等格式。
 */
export interface DownloadOptions extends Omit<ToBlobOptions, 'canvas'> {
  /** Canvas 元素 */
  canvas: HTMLCanvasElement
  /** 下载文件名（不含扩展名），默认 'canvas' */
  filename?: string
}

/**
 * 将画布下载为图片文件
 *
 * 将 Canvas 内容转换为图片文件并自动触发浏览器下载。
 * 内部流程：Canvas → Blob → Object URL → 下载链接
 *
 * **支持的格式**：
 * - `image/png`: 无损压缩，支持透明，文件较大
 * - `image/jpeg`: 有损压缩，不支持透明，文件较小
 * - `image/webp`: 现代格式，压缩率高，兼容性需注意
 *
 * @param options - 下载配置
 * @returns 下载成功返回 true，失败返回 false
 *
 * @example
 * ```typescript
 * // 下载为 PNG（默认）
 * await download({ canvas, filename: 'my-drawing' })
 *
 * // 下载为高质量 JPEG
 * await download({
 *   canvas,
 *   filename: 'photo',
 *   type: 'image/jpeg',
 *   quality: 0.95
 * })
 *
 * // 下载为 WebP（较小文件）
 * await download({
 *   canvas,
 *   filename: 'image',
 *   type: 'image/webp',
 *   quality: 0.8
 * })
 * ```
 */
const download = async (options: DownloadOptions) => {
  const { canvas, filename = 'canvas', type = 'image/png', quality } = options

  const blob = await toBlob({ canvas, type, quality })

  if (!blob) {
    return false
  }

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  // 根据类型确定扩展名
  const extMap: Record<string, string> = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/webp': 'webp',
  }
  const ext = extMap[type] || 'png'

  link.href = url
  link.download = `${filename}.${ext}`
  link.click()

  URL.revokeObjectURL(url)
  return true
}

export default download
