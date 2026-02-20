import { action } from 'storybook/actions'
import PageLifecycleMonitor from '../../../packages/element-utils/src/PageLifecycleMonitor'

const lifecycleDemo = () => {
  const monitor = new PageLifecycleMonitor({
    DOMContentLoaded: (e) => {
      action('生命周期 - DOMContentLoaded')({
        type: e?.type,
        description: 'DOM 解析完成',
      })
    },
    load: (e) => {
      action('生命周期 - Load')({
        type: e?.type,
        description: '页面完全加载',
      })
    },
    pageshow: (e) => {
      action('生命周期 - PageShow')({
        persisted: e?.persisted,
        description: e?.persisted ? 'BFCache 恢复' : '正常展示',
      })
    },
    pagehide: (e) => {
      action('生命周期 - PageHide')({
        persisted: e?.persisted,
        description: '页面隐藏',
      })
    },
    visibilitychange: () => {
      action('生命周期 - VisibilityChange')({
        state: document.visibilityState,
        description: document.visibilityState === 'hidden' ? '页面不可见' : '页面可见',
      })
    },
    focus: () => {
      action('生命周期 - Focus')('窗口获得焦点')
    },
    blur: () => {
      action('生命周期 - Blur')('窗口失去焦点')
    },
    online: () => {
      action('生命周期 - Online')('网络恢复')
    },
    offline: () => {
      action('生命周期 - Offline')('网络断开')
    },
    popstate: () => {
      action('生命周期 - Popstate')('浏览器前进/后退')
    },
    hashchange: () => {
      action('生命周期 - Hashchange')('URL hash 变化')
    },
    freeze: () => {
      action('生命周期 - Freeze')('页面被冻结（Page Lifecycle API）')
    },
    resume: () => {
      action('生命周期 - Resume')('页面从冻结中恢复')
    },
  })

  action('生命周期监控')('已启动，请切换标签页、聚焦/失焦窗口等操作查看事件')

  const stop = monitor.observe()

  // 10秒后停止
  setTimeout(() => {
    stop()
    action('生命周期监控')('已停止')
  }, 10000)
}

export default lifecycleDemo
