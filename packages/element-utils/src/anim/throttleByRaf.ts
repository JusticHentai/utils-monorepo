/**
 *  保证同一帧内节流
 */
export default function throttleByRaf(
  cb: (...params: any[]) => void
): (...params: any[]) => void {
  let timer: number | null = null

  const throttle = (...params: any[]) => {
    timer && cancelAnimationFrame(timer)

    timer = requestAnimationFrame(() => {
      cb(...params)

      timer = null
    })
  }

  throttle.cancel = () => {
    timer && cancelAnimationFrame(timer)
    timer = null
  }

  return throttle
}
