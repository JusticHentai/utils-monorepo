import { Cb } from './interface'

/**
 * 保证同一帧内节流
 * 调用时立即执行 cb，然后同一帧内不会再执行 cb
 * cancel 可以给外部卸载时取消没执行完的帧，防止内存泄漏
 */
const throttleByRaf = (cb: Cb): [Cb, () => void] => {
  let timer: number | null = null

  const throttle = (...params: any[]) => {
    timer && cancelAnimationFrame(timer)

    timer = requestAnimationFrame(() => {
      cb(...params)

      timer = null
    })
  }

  const cancel = () => {
    timer && cancelAnimationFrame(timer)
    timer = null
  }

  return [throttle, cancel]
}

export default throttleByRaf
