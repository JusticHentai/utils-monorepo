export default interface CommandOptions {
  name: string // 命令名
  dec: string // 命令描述
  args?: Argument[] // 参数队列
  argOptions?: ArgumentOptions[] // 参数选项
  action?: (...params: any[]) => void // 执行函数
}

/**
 * 添加命令 的 参数类型
 */
export interface Argument {
  arg: string // 参数名
  dec: string // 参数描述
  required: boolean // 参数是否必选
}

/**
 * 添加命令设置的 选项 类型
 */
export interface ArgumentOptions {
  flags: string
  dec: string
}
