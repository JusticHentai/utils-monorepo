import exit from '@/utils/exit'

class Backup {
  stack: CB[] = []

  push = (cb: CB) => {
    this.stack.push(cb)
  }

  exe = async () => {
    for (const cb of this.stack) {
      await cb()
    }

    exit()
  }
}

export type CB = () => Promise<void> | void

export default new Backup()
