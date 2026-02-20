export interface ThrottleOptions {
  cb: (...params: any[]) => any // 函数本体
  duration: number // 间隔时长
  immediate?: boolean // 是否立即执行
}
