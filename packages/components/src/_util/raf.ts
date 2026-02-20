import { isServerRendering } from './is'

let raf: typeof requestAnimationFrame
let caf: typeof cancelAnimationFrame

if (isServerRendering()) {
  raf = (cb: FrameRequestCallback) => setTimeout(cb, 16) as unknown as number
  caf = (id: number) => clearTimeout(id)
} else {
  raf = requestAnimationFrame
  caf = cancelAnimationFrame
}

export { caf, raf }
