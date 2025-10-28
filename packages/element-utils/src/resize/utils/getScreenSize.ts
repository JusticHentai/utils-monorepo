/**
 * 获取当前屏幕尺寸
 */
const getScreenSize = () => {
  const html = document.querySelector('html') as HTMLHtmlElement

  const width = html.clientWidth
  const height = html.clientHeight

  return {
    width,
    height,
  }
}

export default getScreenSize
