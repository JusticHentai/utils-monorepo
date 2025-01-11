import timeTransform, { TimeResult } from './timeTransform'

/**
 * 获取本地时间
 */
export default function getLocalTime(): TimeResult {
  const time = new Date().getTime()
  return timeTransform(time)
}
