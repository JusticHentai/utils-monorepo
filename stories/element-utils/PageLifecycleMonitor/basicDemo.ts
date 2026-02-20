import { action } from 'storybook/actions'
import PageLifecycleMonitor from '../../../packages/element-utils/src/PageLifecycleMonitor'

const basicDemo = () => {
  const monitor = new PageLifecycleMonitor({
    DOMContentLoaded: (e) => {
      action('DOMContentLoaded')({ readyState: document.readyState })
    },
    load: (e) => {
      action('load')({ readyState: document.readyState })
    },
    focus: () => {
      action('focus')('窗口获得焦点')
    },
    blur: () => {
      action('blur')('窗口失去焦点')
    },
    visibilitychange: () => {
      action('visibilitychange')({ state: document.visibilityState })
    },
    popstate: (e) => {
      action('popstate')({ state: (e as PopStateEvent)?.state })
    },
    hashchange: (e) => {
      action('hashchange')({ newURL: (e as HashChangeEvent)?.newURL })
    },
  })

  const stop = monitor.observe()
  action('PageLifecycleMonitor')('已启动页面生命周期监控')

  setTimeout(() => {
    stop()
    action('清理完成')('已停止所有生命周期监听')
  }, 15000)
}

export default basicDemo
