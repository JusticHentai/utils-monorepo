import aliasKeyCodeMap from './aliasKeyCodeMap'

/** 修饰键检测 */
const modifierKey: Record<string, (event: KeyboardEvent) => boolean> = {
  ctrl: (event: KeyboardEvent) => event.ctrlKey,
  shift: (event: KeyboardEvent) => event.shiftKey,
  alt: (event: KeyboardEvent) => event.altKey,
  meta: (event: KeyboardEvent) => {
    if (event.type === 'keyup') {
      const metaKeys = aliasKeyCodeMap.meta as number[]
      return metaKeys.includes(event.keyCode)
    }
    return event.metaKey
  },
}

export default modifierKey
