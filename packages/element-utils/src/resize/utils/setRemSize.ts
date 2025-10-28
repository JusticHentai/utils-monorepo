/**
 * 设置总体的 rem 比例
 * @param ratio
 */
const setRemSize = (ratio: number) => {
  const html = document.querySelector('html') as HTMLHtmlElement

  const fontSize = 100 * ratio

  html.style.fontSize = `${fontSize}px`
}

export default setRemSize
