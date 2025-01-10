export interface Options {
  onCombo?: (times?: number) => void // 每次连击时触发
  onComplete?: (times?: number) => void // 结束时触发
  duration: number // 间隔时长
}

/**
 * 连击系统
 * 第一次调用 combo times + 1 并触发 onCombo
 * duration 内调用 combo times + 1 并触发 onCombo
 * duration 内没调用 combo 则执行 onComplete times 归 0
 */
export default class Combo {
  onCombo: ((times?: number) => void) | undefined
  onComplete: ((times?: number) => void) | undefined
  duration: number
  times = 0
  timer: number | null = null

  constructor(options: Options) {
    const { onCombo, onComplete, duration } = options

    this.onCombo = onCombo
    this.onComplete = onComplete
    this.duration = duration
  }

  combo = () => {
    if (this.timer) {
      clearTimeout(this.timer)

      this.times++

      this.onCombo && this.onCombo(this.times)
    }

    this.times++

    this.onCombo && this.onCombo(this.times)

    this.timer = setTimeout(() => {
      this.onComplete && this.onComplete(this.times)

      this.timer = null
      this.times = 0
    }, this.duration)
  }
}
