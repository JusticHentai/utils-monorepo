/**
 * 按最大长度硬截断文本
 *
 * 不追加省略号，适合日志、上报 payload、URL 等需要严格控制字段长度的场景。
 *
 * @param text - 原始文本，undefined 会原样返回
 * @param maxLength - 最大保留长度，小于等于 0 或 NaN 时返回空字符串
 * @returns 截断后的文本
 */
function truncateText(text: string, maxLength: number): string
function truncateText(text: undefined, maxLength: number): undefined
function truncateText(
  text: string | undefined,
  maxLength: number
): string | undefined
function truncateText(
  text: string | undefined,
  maxLength: number
): string | undefined {
  if (text === undefined) return undefined
  if (maxLength <= 0 || Number.isNaN(maxLength)) return ''
  if (text.length <= maxLength) return text

  return text.slice(0, maxLength)
}

export default truncateText
