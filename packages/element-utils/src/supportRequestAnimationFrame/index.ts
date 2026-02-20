import isBrowser from '../isBrowser'

/**
 * 检查是否支持 requestAnimationFrame API
 * 用于在下一次重绘之前执行动画帧回调
 *
 * @returns 是否支持 requestAnimationFrame
 *
 * @example
 * ```ts
 * if (supportRequestAnimationFrame()) {
 *   const animate = () => {
 *     // 动画逻辑
 *     requestAnimationFrame(animate)
 *   }
 *   requestAnimationFrame(animate)
 * }
 * ```
 */
const supportRequestAnimationFrame = (): boolean => {
  return isBrowser() && typeof window.requestAnimationFrame !== 'undefined'
}

export default supportRequestAnimationFrame
