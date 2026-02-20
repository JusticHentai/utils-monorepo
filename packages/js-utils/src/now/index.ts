/**
 * 获取当前时间的 Unix 时间戳（毫秒）
 *
 * @description
 * 返回自 1970 年 1 月 1 日 00:00:00 UTC 以来经过的毫秒数。
 *
 * @example
 * ```ts
 * import now from '@utils/js-utils/now'
 *
 * const timestamp = now()
 * // => 1706745600000 (取决于当前时间)
 *
 * // 计算执行时间
 * const start = now()
 * // ... 一些操作
 * const end = now()
 * console.log(`执行耗时: ${end - start}ms`)
 * ```
 *
 * @returns 返回当前时间的 Unix 时间戳（毫秒）
 */
const now = (): number => {
  return Date.now()
}

export default now
