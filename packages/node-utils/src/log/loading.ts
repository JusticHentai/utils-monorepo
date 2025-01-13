import ora, { Ora } from 'ora'

enum TEXT {
  START = '开始加载',
  SUCCEED = '加载成功',
  FAIL = '加载失败',
}

/**
 * 控制展示 loading 图标和文案
 */
export default class Loading {
  control: Ora

  constructor() {
    this.control = ora()
  }

  start = (text?: string) => {
    this.control.start(text || TEXT.START)
  }

  succeed = (text?: string) => {
    this.control.succeed(text || TEXT.SUCCEED)
  }

  fail = (text?: string) => {
    this.control.fail(text || TEXT.FAIL)
  }

  stop = () => {
    this.control.stop()
  }
}
