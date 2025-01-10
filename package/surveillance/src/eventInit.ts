import { EVENT, NAME } from './constants'
import logger from './logger'
import { CallBack } from './types'

const BASE_INFO = `[${NAME}][eventInit]`

const defaultMap = {
  [EVENT.DOM_CONTENT_LOADED]: () =>
    logger.info(`${BASE_INFO}[${EVENT.DOM_CONTENT_LOADED}] default info`),
  [EVENT.LOAD]: () => logger.info(`${BASE_INFO}[${EVENT.LOAD}] default info`),
  [EVENT.BEFORE_UNLOADED]: () =>
    logger.info(`${BASE_INFO}[${EVENT.BEFORE_UNLOADED}] default info`),
  [EVENT.UNLOAD]: () =>
    logger.info(`${BASE_INFO}[${EVENT.UNLOAD}] default info`),
  [EVENT.ERROR]: () => logger.info(`${BASE_INFO}[${EVENT.ERROR}] default info`),
  [EVENT.SSR]: () => logger.info(`${BASE_INFO}[${EVENT.SSR}] default info`),
}

const eventInit = (options?: Partial<Record<EVENT, CallBack>>) => {
  const { ssr, DOMContentLoaded, load, beforeUnload, unload, error } =
    options || {}

  if (!window || !document) {
    ssr ? ssr() : defaultMap[EVENT.SSR]()

    return
  }

  window.addEventListener(EVENT.LOAD, (e) => {
    load ? load(e) : defaultMap[EVENT.LOAD]()
  })

  document.addEventListener(EVENT.DOM_CONTENT_LOADED, (e) => {
    DOMContentLoaded
      ? DOMContentLoaded(e)
      : defaultMap[EVENT.DOM_CONTENT_LOADED]()
  })

  window.addEventListener(EVENT.BEFORE_UNLOADED, (e) => {
    beforeUnload ? beforeUnload(e) : defaultMap[EVENT.BEFORE_UNLOADED]()
  })

  window.addEventListener(EVENT.UNLOAD, (e) => {
    unload ? unload(e) : defaultMap[EVENT.UNLOAD]()
  })

  window.addEventListener(EVENT.ERROR, (e) => {
    error ? error(e) : defaultMap[EVENT.ERROR]()
  })
}

export default eventInit
