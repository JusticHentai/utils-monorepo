import createEventListener from '../../createEventListener'
import type { BehaviorCallback, StopListening } from '../interface'
import { BEHAVIOR_TYPE, ROUTE_TRIGGER } from '../interface'

/**
 * 监控路由变化（支持 History 和 Hash）
 * @param callback - 路由变化回调函数
 * @returns 停止监听函数
 */
const observeRouteChange = (callback: BehaviorCallback): StopListening => {
  let lastUrl = window.location.href

  const handleRouteChange = (type: `${ROUTE_TRIGGER}`) => {
    const currentUrl = window.location.href
    if (currentUrl === lastUrl) return

    callback({
      type: BEHAVIOR_TYPE.NAVIGATE,
      timestamp: Date.now(),
      pageUrl: currentUrl,
      data: {
        from: lastUrl,
        to: currentUrl,
        trigger: type,
      },
    })

    lastUrl = currentUrl
  }

  // 监听 popstate
  const popstateHandler = () => handleRouteChange(ROUTE_TRIGGER.POPSTATE)
  const cleanupPopstate = createEventListener(
    window,
    'popstate',
    popstateHandler
  )

  // 监听 hashchange
  const hashchangeHandler = () => handleRouteChange(ROUTE_TRIGGER.HASHCHANGE)
  const cleanupHashchange = createEventListener(
    window,
    'hashchange',
    hashchangeHandler
  )

  // 劫持 History API
  const originalPushState = history.pushState
  const originalReplaceState = history.replaceState

  history.pushState = function (...args) {
    const result = originalPushState.apply(this, args)
    handleRouteChange(ROUTE_TRIGGER.PUSH_STATE)
    return result
  }

  history.replaceState = function (...args) {
    const result = originalReplaceState.apply(this, args)
    handleRouteChange(ROUTE_TRIGGER.REPLACE_STATE)
    return result
  }

  return () => {
    cleanupPopstate()
    cleanupHashchange()
    history.pushState = originalPushState
    history.replaceState = originalReplaceState
  }
}

export default observeRouteChange
