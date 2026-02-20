import { caf, raf } from './raf'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function throttleByRaf(cb: (...args: any[]) => void) {
  let timer = 0

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const throttle = (...args: any[]) => {
    if (timer) {
      caf(timer)
    }
    timer = raf(() => {
      cb(...args)
      timer = 0
    })
  }

  throttle.cancel = () => {
    caf(timer)
    timer = 0
  }

  return throttle
}
