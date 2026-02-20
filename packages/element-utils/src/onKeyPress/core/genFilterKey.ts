import isString from '@justichentai/js-utils/isString'

import { isNumber } from '../../isNumber'
import type { KeyType } from '../interface'
import aliasKeyCodeMap from './aliasKeyCodeMap'
import modifierKey from './modifierKey'

/** 判断合法的按键类型 */
export const isValidKeyType = (value: unknown): value is string | number => {
  return isString(value) || isNumber(value)
}

/** 根据 event 计算激活键数量 */
export const countKeyByEvent = (event: KeyboardEvent) => {
  const countOfModifier = Object.keys(modifierKey).reduce((total, key) => {
    if (modifierKey[key](event)) {
      return total + 1
    }
    return total
  }, 0)

  // 16 17 18 91 92 是修饰键的 keyCode
  return [16, 17, 18, 91, 92].includes(event.keyCode)
    ? countOfModifier
    : countOfModifier + 1
}

/** 判断按键是否激活 */
export const genFilterKey = (
  event: KeyboardEvent,
  keyFilter: KeyType,
  exactMatch: boolean
): KeyType | false => {
  // 浏览器自动补全 input 的时候，会触发 keyDown、keyUp 事件，但此时 event.key 等为空
  if (!event.key) return false

  // 数字类型直接匹配事件的 keyCode
  if (isNumber(keyFilter)) {
    return event.keyCode === keyFilter ? keyFilter : false
  }

  // 字符串依次判断是否有组合键
  const genArr = keyFilter.split('.')
  let genLen = 0

  for (const key of genArr) {
    const genModifier = modifierKey[key]
    const aliasKeyCode = aliasKeyCodeMap[key.toLowerCase()]

    if (
      (genModifier && genModifier(event)) ||
      (aliasKeyCode && aliasKeyCode === event.keyCode)
    ) {
      genLen++
    }
  }

  if (exactMatch) {
    return genLen === genArr.length && countKeyByEvent(event) === genArr.length
      ? keyFilter
      : false
  }

  return genLen === genArr.length ? keyFilter : false
}
