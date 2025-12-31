import scrollBottom from '../../../packages/element-utils/src/scrollBottom'

const basicDemo = () => {
  const element = document.createElement('div')
  element.style.height = '100px'
  element.style.overflow = 'auto'
  element.innerHTML = '<div style="height: 300px;">滚动内容</div>'

  const removeListener = scrollBottom(element, () => {
    console.log('滚动到底部')
  })

  return { message: '已添加滚动监听', removeListener }
}

export default basicDemo
