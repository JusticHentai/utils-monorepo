/**
 * 时间差的返回值
 */
export interface TimeElapsedReturn {
  initialTime: number // 开始时间戳
  currentTime: number // 时间戳
  elapsed: number // 与上一段时间差
  totalElapsed: number // 与首次记录的时间差
}
