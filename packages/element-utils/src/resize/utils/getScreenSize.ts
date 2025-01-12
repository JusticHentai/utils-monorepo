/**
 * width 宽度
 * height 高度
 */
export interface GetScreenSizeResult {
  width: number
  height: number
}

/**
 * 获取当前屏幕尺寸
 */
export default function getScreenSize(): GetScreenSizeResult {
  const html = document.querySelector('html') as HTMLHtmlElement

  const width = html.clientWidth
  const height = html.clientHeight

  return {
    width,
    height,
  }
}
