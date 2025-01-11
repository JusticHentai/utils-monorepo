export const NAME = '@justichentai/surveillance'

export enum EVENT {
  DOM_CONTENT_LOADED = 'DOMContentLoaded',
  LOAD = 'load',
  BEFORE_UNLOADED = 'beforeUnload',
  UNLOAD = 'unload',
  ERROR = 'error',
  SSR = 'ssr',
}
