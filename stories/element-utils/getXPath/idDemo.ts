import { action } from 'storybook/actions'
import getXPath from '../../../packages/element-utils/src/getXPath'

/**
 * 创建带 ID 元素示例的工厂函数
 * @param containerId 容器元素的 ID
 */
export const createIdDemo = (containerId: string) => () => {
  const container = document.getElementById(containerId)
  if (!container) {
    action('错误')('容器元素不存在')
    return
  }

  const child = container.querySelector('span')
  if (!child) {
    action('错误')('子元素不存在')
    return
  }

  // 展示 DOM 层级结构
  action('DOM 层级结构')(`
    容器#${containerId} ← 有 ID
    └── span (子元素)
  `)

  // 获取带 ID 元素的 XPath（会返回简短的 ID 选择器）
  const containerXPath = getXPath(container)
  action('带 ID 元素 XPath')(containerXPath)
  // 输出: //*[@id="xpath-id-container"]

  // 获取子元素的 XPath
  const childXPath = getXPath(child)
  action('子元素 XPath')(childXPath)
  // 输出: //*[@id="xpath-id-container"]/span[1]
}

export default createIdDemo
