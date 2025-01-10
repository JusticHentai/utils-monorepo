/**
 * 将 text 复制到粘贴板
 */
const addClipboard = async (text: string): Promise<void> => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text)

      return
    } catch (err) {
      console.error(
        err ?? new DOMException('内容无法复制到粘贴板', 'NotAllowedError')
      )
    }
  }

  // 老的兼容

  const span = document.createElement('span')
  span.textContent = text
  span.style.whiteSpace = 'pre'
  document.body.appendChild(span)

  const selection = window.getSelection() as Selection
  const range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  let success = false

  try {
    success = window.document.execCommand('copy')
  } catch (err) {
    console.log('error', err)
  }

  selection.removeAllRanges()
  window.document.body.removeChild(span)

  return success
    ? Promise.resolve()
    : Promise.reject(
        new DOMException('内容无法复制到粘贴板', 'NotAllowedError')
      )
}

export default addClipboard
