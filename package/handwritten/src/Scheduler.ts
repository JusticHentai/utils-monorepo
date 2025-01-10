export default class Scheduler {
  max = 0
  count = 0
  queue: any[] = []

  constructor(max: number) {
    this.max = max
  }

  async add(fn: (...params: any[]) => any) {
    if (this.count >= this.max) {
      await new Promise((resolve) => this.queue.push(resolve))
    }

    this.count++

    const res = await fn()

    this.count--

    this.queue.length && this.queue.shift()()

    return res
  }
}
