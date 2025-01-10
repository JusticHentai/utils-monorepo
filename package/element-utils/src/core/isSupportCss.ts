import { isUndefined } from '@justichentai/is'

/**
 * 判断是否支持某些 css
 */
export default function isSupportCss(css: Record<string, string>): boolean {
  return Object.entries(css).every(([key, value]) => supportCss(key, value))
}

const supportCss = (key: string, value: string) => {
  if (typeof window !== 'undefined' && window.CSS && window.CSS.supports) {
    if (!isUndefined(value)) {
      return window.CSS.supports(key, value)
    }

    return window.CSS.supports(key)
  }

  if (typeof document !== 'undefined' && document.createElement) {
    const elem = document.createElement('div')
    elem.setAttribute(`style`, `${key}:${value};`)

    return typeof elem.style[key as any] !== 'undefined'
  }

  return false
}
