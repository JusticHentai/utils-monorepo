import { action } from 'storybook/actions'
import getXPath from '../../../packages/element-utils/src/getXPath'

/**
 * 创建基础示例的工厂函数
 * @param containerId 容器元素的 ID
 */
export const createBasicDemo = (containerId: string) => () => {
  const container = document.getElementById(containerId)
  if (!container) {
    action('错误')('容器元素不存在')
    return
  }

  const ul = container.querySelector('ul')
  const li2 = container.querySelector('#target-li') || container.querySelectorAll('li')[1]

  if (!ul || !li2) {
    action('错误')('目标元素不存在')
    return
  }

  // 展示 DOM 层级结构
  action('DOM 层级结构')(`
    容器
    └── ul
        ├── li (列表项 1)
        ├── li#target-li (列表项 2) ← 目标元素
        └── li (列表项 3)
  `)

  // 获取第二个 li 的 XPath
  const xpath = getXPath(li2)

  action('li2 的 XPath')(xpath)
  // 输出类似: /html/body/.../ul[1]/li[2]
}

export default createBasicDemo
