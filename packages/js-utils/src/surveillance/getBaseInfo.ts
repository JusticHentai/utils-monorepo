const getBaseInfo = () => {
  const navigationEntries = performance.getEntriesByType('navigation')

  if (!navigationEntries?.length) {
    return
  }

  const navigation = navigationEntries[0] as PerformanceNavigationTiming

  const unload = navigation.unloadEventEnd - navigation.unloadEventStart
  const dnsCache = navigation.domainLookupStart - navigation.fetchStart
  const dns = navigation.domainLookupEnd - navigation.domainLookupStart
  const tcp = navigation.connectEnd - navigation.connectStart
  const tls =
    navigation.secureConnectionStart > 0
      ? navigation.connectEnd - navigation.secureConnectionStart
      : 0
  const ttfb = navigation.responseStart - navigation.requestStart
  const trans = navigation.responseEnd - navigation.responseStart

  const domParse = navigation.domInteractive - navigation.responseEnd
  const domComplete = navigation.domComplete - navigation.domInteractive

  const loadEvent = navigation.loadEventEnd - navigation.loadEventStart

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

export default getBaseInfo
