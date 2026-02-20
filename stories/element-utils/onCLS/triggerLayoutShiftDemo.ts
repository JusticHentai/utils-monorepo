import { action } from 'storybook/actions'

const triggerLayoutShiftDemo = () => {
  // 创建一个会导致布局偏移的元素
  const element = document.createElement('div')
  element.style.cssText = `
    position: relative;
    width: 200px;
    height: 100px;
    background: #ff6b6b;
    margin: 20px auto;
    transition: none;
  `
  element.textContent = '布局偏移元素'
  document.body.insertBefore(element, document.body.firstChild)

  // 稍后移除，模拟布局偏移
  setTimeout(() => {
    element.remove()
    action('触发布局偏移')('元素已移除，可能产生布局偏移')
  }, 100)
}

export default triggerLayoutShiftDemo
