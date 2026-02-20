import { action } from 'storybook/actions'

export const changeClassFilterDemo = () => {
  const container =
    (window as any).__attributeChangeFilterEl ||
    document.getElementById('attribute-filter-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  const newClass = `filter-class-${Date.now()}`
  container.className = newClass
  action('修改 class（会触发）')(`设置为: ${newClass}`)
}

export const changeDataFilterDemo = () => {
  const container =
    (window as any).__attributeChangeFilterEl ||
    document.getElementById('attribute-filter-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  container.dataset.value = `ignored-${Date.now()}`
  action('修改 data-value（不会触发）')('因为只监听 class 属性')
}

export const cleanupFilterDemo = () => {
  action('清理完成')()
}
