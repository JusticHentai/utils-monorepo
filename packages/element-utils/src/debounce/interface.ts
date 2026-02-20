export interface DebounceOptions {
  cb: (...params: any[]) => void // 函数本体
  duration: number // 间隔时长
  immediate?: boolean // 是否立即执行
}
