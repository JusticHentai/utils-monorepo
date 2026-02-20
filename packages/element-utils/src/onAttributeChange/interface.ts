/**
 * onAttributeChange 回调函数类型
 */
export type OnAttributeChangeCallback = (
  attributeName: string | null,
  oldValue: string | null,
  newValue: string | null,
  target: Element
) => void
