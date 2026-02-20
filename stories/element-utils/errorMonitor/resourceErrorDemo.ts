import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const resourceErrorDemo = () => {
  const monitor = new ErrorMonitor({
    jsError: false,
    promiseError: false,
    resourceError: true,
  })

  const stop = monitor.observe((error) => {
    action('捕获资源错误')(error)
  })

  const img = document.createElement('img')
  img.src = 'https://example.invalid/not-exist.png'
  document.body.appendChild(img)

  img.addEventListener('error', () => {
    document.body.removeChild(img)
    stop()
    action('演示完成')('已触发图片加载失败并停止监听')
  })
}

export default resourceErrorDemo
