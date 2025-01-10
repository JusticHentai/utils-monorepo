/**
 * 报错回调函数
 */
export type ErrorCallback = (errorLog: string) => any

/**
 * 初始化选项
 */
export interface Options {
  runtime?: ErrorCallback
  reject?: ErrorCallback
  consoleError?: ErrorCallback
}
