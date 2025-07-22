export interface Options {
  cb: (...params: any[]) => void // 函数本体
  duration: number // 间隔时长
  immediate?: boolean // 是否立即执行
}

/**
 * 节流
 * immediate false 时
 * duration 内执行 没反应
 * duration 到时 执行一次 cb
 * immediate true 时
 * 先执行一次 cb
 * duration 内执行 没反应
 */
export default function throttle(options: Options) {
  const { cb, duration, immediate } = options

  let timeout: number | null = null

  return (...params: any[]) => {
    if (timeout) {
      return
    }

    if (immediate) {
      const callNow = !timeout

      timeout = setTimeout(() => {
        timeout = null
      }, duration)

      callNow && cb(...params)
    } else {
      timeout = setTimeout(() => {
        cb(...params)
        timeout = null
      }, duration)
    }
  }
}
