/**
 * body 设置全屏高度, 保证各种浏览器全屏高度适配 防止动态变更
 */
const setFullScreen = () => {
  const body = document.body

  body.style.height = `${window.innerHeight}px`
}

export default setFullScreen
