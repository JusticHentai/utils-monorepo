import scrollBottom from '../../../packages/element-utils/src/scrollBottom'

const thresholdDemo = () => {
  const element = document.createElement('div')
  element.style.height = '100px'
  element.style.overflow = 'auto'
  element.innerHTML = '<div style="height: 300px;">滚动内容</div>'

  const removeListener = scrollBottom(
    element,
    () => {
      console.log('接近底部 50px')
    },
    50
  )

  return { message: '已添加滚动监听（阈值 50px）', removeListener }
}

export default thresholdDemo
