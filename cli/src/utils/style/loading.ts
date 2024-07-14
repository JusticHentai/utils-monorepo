import ora, { Options, Ora } from 'ora'

/**
 * 控制台loading控制类
 * 将ora类化
 */
export default class Loading {
  public loading: Ora // ora实例

  constructor() {
    const options: Options = {
      text: '资源加载中',
    }

    this.loading = ora(options)
  }

  /**
   * 开始加载
   * @param text 加载文案
   */
  start = (text?: string): Loading => {
    this.loading.start(text)
    return this
  }

  /**
   * 加载成功
   * @param text 成功文案
   */
  succeed = (text = '加载成功'): Loading => {
    this.loading.succeed(text)
    return this
  }

  /**
   * 加载失败
   * @param text 失败文案
   */
  fail = (text = '加载失败'): Loading => {
    this.loading.fail(text)
    return this
  }

  /**
   * 停止加载
   */
  stop = (): Loading => {
    this.loading.stop()
    return this
  }
}
