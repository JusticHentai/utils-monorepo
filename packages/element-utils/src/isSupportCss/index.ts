/**
 * 判断是否支持某些 css
 */
const isSupportCss = (css: Record<string, string>): boolean => {
  return Object.entries(css).every(([key, value]) => {
    if (typeof window !== 'undefined' && window.CSS && window.CSS.supports) {
      if (value) {
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
  })
}

export default isSupportCss
