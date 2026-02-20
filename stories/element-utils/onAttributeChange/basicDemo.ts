import { action } from 'storybook/actions'

export const changeClassDemo = () => {
  const container =
    (window as any).__attributeChangeBasicEl ||
    document.getElementById('attribute-change-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  const newClass = `demo-class-${Date.now()}`
  container.className = newClass
  action('修改 class')(`设置为: ${newClass}`)
}

export const changeDataDemo = () => {
  const container =
    (window as any).__attributeChangeBasicEl ||
    document.getElementById('attribute-change-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  const newValue = `value-${Date.now()}`
  container.dataset.value = newValue
  action('修改 data-value')(`设置为: ${newValue}`)
}

export const changeStyleDemo = () => {
  const container =
    (window as any).__attributeChangeBasicEl ||
    document.getElementById('attribute-change-demo')
  if (!container) {
    action('请先初始化')()
    return
  }

  container.style.background =
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  action('修改 style')('变更背景色')
}

export const cleanupDemo = () => {
  action('清理完成')()
}
