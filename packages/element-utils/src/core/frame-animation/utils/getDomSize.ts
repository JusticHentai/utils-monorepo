/**
 * 获取 HTMLElement 的值
 * @param element
 */
export default function getDomSize(element: HTMLElement): {
  height: number
  width: number
} {
  const { height, width } = element.getBoundingClientRect()

  return { height, width }
}
