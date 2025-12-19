import logger from '../logger'

const observerInit = () => {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'navigation') {
        const navigationInfo = getNavigationInfo(
          entry as PerformanceNavigationTiming
        )

        logger.info(
          `[surveillance][observerInit] navigationInfo:`,
          navigationInfo
        )
      }

      if (entry.entryType === 'paint') {
        if (entry.name === 'first-paint') {
          const FP = getPaintInfo(entry as PerformancePaintTiming)

          logger.info(`[surveillance][observerInit] FP:`, FP)
        }

        if (entry.name === 'first-contentful-paint') {
          const FCP = getPaintInfo(entry as PerformancePaintTiming)

          logger.info(`[surveillance][observerInit] FP:`, FCP)
        }
      }
    })
  })

  observer.observe({
    entryTypes: ['navigation', 'paint'],
  })
}

export default observerInit

const getNavigationInfo = (entry: PerformanceNavigationTiming) => {
  const unload = entry.unloadEventEnd - entry.unloadEventStart
  const dnsCache = entry.domainLookupStart - entry.fetchStart
  const dns = entry.domainLookupEnd - entry.domainLookupStart
  const tcp = entry.connectEnd - entry.connectStart
  const tls =
    entry.secureConnectionStart > 0
      ? entry.connectEnd - entry.secureConnectionStart
      : 0
  const ttfb = entry.responseStart - entry.requestStart
  const trans = entry.responseEnd - entry.responseStart

  const domParse = entry.domInteractive - entry.responseEnd
  const domComplete = entry.domComplete - entry.domInteractive

  const loadEvent = entry.loadEventEnd - entry.loadEventStart

  return {
    unload,
    dnsCache,
    dns,
    tcp,
    tls,
    ttfb,
    trans,
    domParse,
    domComplete,
    loadEvent,
  }
}

const getPaintInfo = (entry: PerformancePaintTiming) => {
  return entry.startTime
}
