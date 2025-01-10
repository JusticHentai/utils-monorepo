import { IFunction } from '@justichentai/types-utils'

export interface Options {
  cb: IFunction // 函数本体
  duration: number // 间隔时长
  immediate?: boolean // 是否立即执行
}

/**
 * 防抖
 * immediate false 时
 * duration 内执行 加时间
 * duration 内没有执行 则执行一遍 cb
 * immediate true 时
 *  先执行一次 cb duration 内执行加时间
 */
export default function debounce(options: Options) {
  const { cb, duration, immediate } = options

  let timeout: number | null = null

  return (...params: any[]) => {
    if (timeout) clearTimeout(timeout)

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
