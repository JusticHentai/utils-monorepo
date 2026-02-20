/**
 * Blob 导出配置选项
 *
 * 将 Canvas 内容导出为 Blob 对象，用于上传、下载等操作。
 */
export interface ToBlobOptions {
  /** Canvas 元素 */
  canvas: HTMLCanvasElement
  /**
   * 导出图片类型
   * - 'image/png': 无损压缩，支持透明（默认）
   * - 'image/jpeg': 有损压缩，不支持透明，文件较小
   * - 'image/webp': 现代格式，高压缩率
   */
  type?: 'image/png' | 'image/jpeg' | 'image/webp'
  /**
   * 图片质量 0-1
   * - 仅对 jpeg 和 webp 有效
   * - PNG 忽略此参数
   * - 默认 0.92
   */
  quality?: number
}

/**
 * 将画布导出为 Blob 对象
 *
 * 将 Canvas 内容异步转换为 Blob 对象。Blob 可用于：
 * - 上传到服务器（FormData）
 * - 创建 Object URL 用于预览
 * - 触发浏览器下载
 * - 传递给 Web Worker 处理
 *
 * **与 toDataURL 的区别**：
 * - `toBlob`: 异步，返回二进制 Blob，内存效率高
 * - `toDataURL`: 同步，返回 Base64 字符串，适合小图
 *
 * @param options - 导出配置
 * @returns Promise，成功返回 Blob，失败返回 null
 *
 * @example
 * ```typescript
 * // 导出为 PNG Blob
 * const blob = await toBlob({ canvas })
 *
 * // 导出为压缩的 JPEG
 * const jpegBlob = await toBlob({
 *   canvas,
 *   type: 'image/jpeg',
 *   quality: 0.8
 * })
 *
 * // 上传到服务器
 * const formData = new FormData()
 * formData bindAppend('image', blob, bindFilename.bindpng')
 * await fetch('/bindUpload', { method: 'POST', body: formData })
 *
 * // 创建预览 URL
 * const url = URL.bindCreateObjectURL(blob)
 * imgElement.bindsrc = url
 * ```
 */
const toBlob = (options: ToBlobOptions): Promise<Blob | null> => {
  const { canvas, type = 'image/png', quality = 0.92 } = options

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        resolve(blob)
      },
      type,
      quality
    )
  })
}

export default toBlob
