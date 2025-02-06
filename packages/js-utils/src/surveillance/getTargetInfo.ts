const getTargetInfo = () => {
  const navigationEntries = performance.getEntriesByType('navigation')
  const paint = performance.getEntriesByType('paint')

  const navigation = navigationEntries?.[0] as PerformanceNavigationTiming
  const firstPaint = paint.find((item) => item.name === 'first-paint')
  const firstContentfulPaint = paint.find(
    (item) => item.name === 'first-contentful-paint'
  )

  if (!navigation || !firstPaint || !firstContentfulPaint) {
    return
  }

  const FP = firstPaint.startTime - navigation.fetchStart
  const FCP = firstContentfulPaint.startTime - navigation.fetchStart

  return {
    FP,
    FCP,
  }
}

export default getTargetInfo
