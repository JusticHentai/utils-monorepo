/**
 * 根据采样率判断是否需要采集
 * @param sampleRate - 采样率，范围 0~1，默认为 1（全量采集）
 * @returns 是否命中采样
 */
const shouldSample = (sampleRate = 1): boolean => {
  if (sampleRate >= 1) return true
  if (sampleRate <= 0) return false
  return Math.random() < sampleRate
}

export default shouldSample
