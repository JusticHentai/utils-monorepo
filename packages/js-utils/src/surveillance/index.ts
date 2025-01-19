import { EVENT } from './constants'
import defaultHandle from './defaultHandle'
import { CallBack } from './types'

const surveillance = (options?: Partial<Record<EVENT, CallBack>>) => {
  const { ssr, DOMContentLoaded, load, beforeUnload, unload } = options || {}

  if (!window || !document) {
    ssr ? ssr() : defaultHandle[EVENT.SSR]()

    return
  }

  // 初始化
  window.addEventListener(EVENT.LOAD, (e) => {
    load ? load(e) : defaultHandle[EVENT.LOAD]()
  })

  document.addEventListener(EVENT.DOM_CONTENT_LOADED, (e) => {
    DOMContentLoaded
      ? DOMContentLoaded(e)
      : defaultHandle[EVENT.DOM_CONTENT_LOADED]()
  })

  // 离开页面
  window.addEventListener(EVENT.BEFORE_UNLOADED, (e) => {
    beforeUnload ? beforeUnload(e) : defaultHandle[EVENT.BEFORE_UNLOADED]()
  })

  window.addEventListener(EVENT.UNLOAD, (e) => {
    unload ? unload(e) : defaultHandle[EVENT.UNLOAD]()
  })
}

export default surveillance
