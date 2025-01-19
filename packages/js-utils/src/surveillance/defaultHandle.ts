import logger from '@/logger'
import { DEFAULT_INFO, EVENT } from './constants'

const defaultHandle = {
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

export default defaultHandle
