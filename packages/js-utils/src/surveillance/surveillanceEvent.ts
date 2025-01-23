import logger from '@/logger'

export enum EVENT {
  DOM_CONTENT_LOADED = 'DOMContentLoaded',
  LOAD = 'load',
  BEFORE_UNLOADED = 'beforeUnload',
  UNLOAD = 'unload',
  SSR = 'ssr',
}

const defaultHandle = {
  [EVENT.DOM_CONTENT_LOADED]: () =>
    logger.info(
      `[surveillance][eventInit][${EVENT.DOM_CONTENT_LOADED}] default info`
    ),
  [EVENT.LOAD]: () =>
    logger.info(`[surveillance][eventInit][${EVENT.LOAD}] default info`),
  [EVENT.BEFORE_UNLOADED]: () =>
    logger.info(
      `[surveillance][eventInit][${EVENT.BEFORE_UNLOADED}] default info`
    ),
  [EVENT.UNLOAD]: () =>
    logger.info(`[surveillance][eventInit][${EVENT.UNLOAD}] default info`),
  [EVENT.SSR]: () =>
    logger.info(`[surveillance][eventInit][${EVENT.SSR}] default info`),
}

const surveillanceEvent = (
  options?: Partial<Record<EVENT, (e?: Event) => any>>
) => {
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

export default surveillanceEvent
