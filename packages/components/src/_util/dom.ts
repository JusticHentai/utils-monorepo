import { isServerRendering } from './is'

export function contains(
  root: HTMLElement | null,
  target: HTMLElement | null
): boolean {
  if (!root || !target) return false
  if (root.contains) return root.contains(target)

  let node: HTMLElement | null = target
  while (node) {
    if (node === root) return true
    node = node.parentNode as HTMLElement | null
  }
  return false
}

export function getScrollTop(el: HTMLElement | Window): number {
  if (el === window) {
    return window.scrollY || document.documentElement.scrollTop
  }
  return (el as HTMLElement).scrollTop
}

export function getScrollLeft(el: HTMLElement | Window): number {
  if (el === window) {
    return window.scrollX || document.documentElement.scrollLeft
  }
  return (el as HTMLElement).scrollLeft
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyEventHandler = ((e: any) => void) | EventListenerOrEventListenerObject

export function off(
  element: HTMLElement | Window | Document | null,
  event: string,
  handler: AnyEventHandler,
  options?: boolean | EventListenerOptions
) {
  element?.removeEventListener(
    event,
    handler as EventListenerOrEventListenerObject,
    options
  )
}

export function on(
  element: HTMLElement | Window | Document | null,
  event: string,
  handler: AnyEventHandler,
  options?: boolean | AddEventListenerOptions
) {
  element?.addEventListener(
    event,
    handler as EventListenerOrEventListenerObject,
    options
  )
}

export function isScrollable(el: HTMLElement): boolean {
  const style = window.getComputedStyle(el)
  return (
    style.overflow === 'auto' ||
    style.overflow === 'scroll' ||
    style.overflowY === 'auto' ||
    style.overflowY === 'scroll'
  )
}

export function getDocumentElement(): HTMLElement {
  if (isServerRendering()) {
    return {} as HTMLElement
  }
  return document.documentElement || document.body
}
