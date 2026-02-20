import type { ResourceMetrics } from '../interface'

/**
 * 解析资源性能条目
 * @param entry - PerformanceResourceTiming 条目
 * @returns 资源性能指标对象
 */
const parseResourceEntry = (
  entry: PerformanceResourceTiming
): ResourceMetrics => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart
  const tcp = entry.connectEnd - entry.connectStart
  const tls =
    entry.secureConnectionStart > 0
      ? entry.connectEnd - entry.secureConnectionStart
      : 0
  const ttfb = entry.responseStart - entry.requestStart
  const download = entry.responseEnd - entry.responseStart

  // 判断是否来自缓存
  const fromCache =
    entry.transferSize === 0 ||
    (entry.transferSize > 0 && entry.encodedBodySize === 0)

  return {
    name: entry.name,
    initiatorType: entry.initiatorType,
    startTime: entry.startTime,
    duration: entry.duration,
    transferSize: entry.transferSize,
    decodedBodySize: entry.decodedBodySize,
    encodedBodySize: entry.encodedBodySize,
    dns,
    tcp,
    tls,
    ttfb,
    download,
    fromCache,
    protocol: entry.nextHopProtocol,
  }
}

export default parseResourceEntry
