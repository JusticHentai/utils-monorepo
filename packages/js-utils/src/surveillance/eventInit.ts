import logger from '@/logger'
import { DEFAULT_INFO, EVENT } from './constants'
import { CallBack } from './types'

const defaultMap = {
  [EVENT.DOM_CONTENT_LOADED]: () =>
    logger.info(`${DEFAULT_INFO}[${EVENT.DOM_CONTENT_LOADED}] default info`),
  [EVENT.LOAD]: () =>
    logger.info(`${DEFAULT_INFO}[${EVENT.LOAD}] default info`),
  [EVENT.BEFORE_UNLOADED]: () =>
    logger.info(`${DEFAULT_INFO}[${EVENT.BEFORE_UNLOADED}] default info`),
  [EVENT.UNLOAD]: () =>
    logger.info(`${DEFAULT_INFO}[${EVENT.UNLOAD}] default info`),
  [EVENT.SSR]: () => logger.info(`${DEFAULT_INFO}[${EVENT.SSR}] default info`),
}

const surveillanceInit = (options?: Partial<Record<EVENT, CallBack>>) => {
  const { ssr, DOMContentLoaded, load, beforeUnload, unload } = options || {}

  if (!window || !document) {
    ssr ? ssr() : defaultMap[EVENT.SSR]()

    return
  }

  // 初始化
  window.addEventListener(EVENT.LOAD, (e) => {
    load ? load(e) : defaultMap[EVENT.LOAD]()
  })

  document.addEventListener(EVENT.DOM_CONTENT_LOADED, (e) => {
    DOMContentLoaded
      ? DOMContentLoaded(e)
      : defaultMap[EVENT.DOM_CONTENT_LOADED]()
  })

  // 离开页面
  window.addEventListener(EVENT.BEFORE_UNLOADED, (e) => {
    beforeUnload ? beforeUnload(e) : defaultMap[EVENT.BEFORE_UNLOADED]()
  })

  window.addEventListener(EVENT.UNLOAD, (e) => {
    unload ? unload(e) : defaultMap[EVENT.UNLOAD]()
  })
}

export default surveillanceInit
