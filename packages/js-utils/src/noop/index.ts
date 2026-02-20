/**
 * 空函数，不执行任何操作
 *
 * @description
 * 返回 undefined，无论传入什么参数。
 * 常用于作为默认回调函数或占位函数。
 *
 * @example
 * ```ts
 * import noop from '@utils/js-utils/noop'
 *
 * const object = { 'user': noop }
 *
 * object.user('hi')
 * // => undefined
 * ```
 *
 * @returns undefined
 */
const noop = (): void => {
  // 什么都不做
}

export default noop
