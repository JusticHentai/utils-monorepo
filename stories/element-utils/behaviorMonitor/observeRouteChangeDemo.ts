import { action } from 'storybook/actions'
import observeRouteChange from '../../../packages/element-utils/src/BehaviorMonitor/core/observeRouteChange'

const observeRouteChangeDemo = () => {
  const stop = observeRouteChange((behavior) => {
    action('路由变化')({
      type: behavior.type,
      data: behavior.data,
    })
  })

  action('路由监控已启动')('将依次触发 pushState / replaceState / popstate')

  // 模拟 pushState
  history.pushState(null, '', '#push-test')

  // 模拟 replaceState
  setTimeout(() => {
    history.replaceState(null, '', '#replace-test')
  }, 500)

  // 模拟 popstate（浏览器后退）
  setTimeout(() => {
    history.back()
  }, 1000)

  setTimeout(() => {
    stop()
    action('路由监控已停止')('已恢复原始 History API')
  }, 2000)
}

export default observeRouteChangeDemo
