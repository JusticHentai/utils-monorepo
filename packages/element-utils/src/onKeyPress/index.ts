import createEventListener from '../createEventListener'
import isBrowser from '../isBrowser'
import type { CleanupFn, OnKeyPressOptions } from './interface'

export { default as aliasKeyCodeMap } from './core/aliasKeyCodeMap'
export {
  countKeyByEvent,
  genFilterKey,
  isValidKeyType,
} from './core/genFilterKey'
export { default as genKeyFormatter } from './core/genKeyFormatter'
export { default as modifierKey } from './core/modifierKey'

/**
 * 监听键盘事件
 *
 * @param key - 按键或按键数组（支持 event.key 或 event.code）
 * @param callback - 按键回调
 * @param options - 配置选项
 * @returns 清理函数
 */
const onKeyPress = (
  key: string | string[],
  callback: (event: KeyboardEvent) => void,
  options?: OnKeyPressOptions
): CleanupFn => {
  if (!isBrowser()) return () => {}

  const { type = 'keydown', target = window, modifiers = {} } = options || {}

  const keys = Array.isArray(key) ? key : [key]

  const handler = (event: KeyboardEvent) => {
    // 检查修饰键
    if (modifiers.ctrl && !event.ctrlKey) return
    if (modifiers.alt && !event.altKey) return
    if (modifiers.shift && !event.shiftKey) return
    if (modifiers.meta && !event.metaKey) return

    // 检查按键
    if (keys.includes(event.key) || keys.includes(event.code)) {
      callback(event)
    }
  }

  return createEventListener(
    target,
    type,
    handler as (event: WindowEventMap[typeof type]) => void
  )
}

export default onKeyPress
