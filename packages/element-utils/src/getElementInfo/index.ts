import { truncate } from '@justichentai/js-utils'
import getXPath from '../getXPath'
import isElement from '../isElement'
import type { ElementInfo, GetElementInfoOptions } from './interface'
import { DEFAULT_MAX_LENGTH } from './interface'

/**
 * 获取 DOM 元素信息
 * @param element - 目标元素
 * @param options - 配置选项
 * @returns 元素信息对象，包含标签名、ID、类名、文本内容和 XPath；非法元素返回 undefined
 */
const getElementInfo = (
  element: Element,
  options?: GetElementInfoOptions
): ElementInfo | undefined => {
  if (!isElement(element)) return undefined

  const { maxLength = DEFAULT_MAX_LENGTH } = options || {}

  return {
    tagName: element.tagName.toLowerCase(),
    id: element.id,
    className: element.className,
    innerText: truncate({
      str: (element as HTMLElement)?.innerText?.trim() || '',
      maxLength,
    }),
    xpath: getXPath(element),
  }
}

export default getElementInfo
