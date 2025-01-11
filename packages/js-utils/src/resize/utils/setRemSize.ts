/**
 * 设置总体的 rem 比例
 * @param ratio
 */
export default function setRemSize(ratio: number) {
  const html = document.querySelector('html') as HTMLHtmlElement

  const fontSize = 100 * ratio

  html.style.fontSize = `${fontSize}px`
}
