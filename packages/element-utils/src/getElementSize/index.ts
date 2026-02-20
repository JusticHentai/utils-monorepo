/**
 * 获取元素当前尺寸
 *
 * 通过 getBoundingClientRect 获取元素的宽高信息，
 * 返回值包含元素的实际渲染尺寸（包括边框和内边距）
 *
 * @param element - 目标元素，可以为 null
 * @returns 元素尺寸信息 { width, height }，元素为空时返回 { width: 0, height: 0 }
 */
const getElementSize = (
  element: Element | null
): { width: number; height: number } => {
  if (!element) return { width: 0, height: 0 }

  const rect = element.getBoundingClientRect()
  return {
    width: rect.width,
    height: rect.height,
  }
}

export default getElementSize
