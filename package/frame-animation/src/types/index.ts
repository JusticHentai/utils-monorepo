/**
 * 初始化选项
 */
export interface Options {
  el: HTMLDivElement // 要挂载的 dom
  url: string // 帧动画图片 url
  frame: number // 帧数
  duration?: number // 持续时间 按 ms 计时
  column?: number // 帧动画图片 每行的列数 0 表示一行
  imageLoadComplete?: (url: HTMLImageElement) => any // 图片加载完毕回调
  frameComplete?: (frame: number) => any // 每帧回调
  completeOne?: (times: number) => any // 每播完一次回调 times 是当前次数
  complete?: () => any // 播放次数用完 结束回调
}

/**
 * 默认选项
 */
export interface DefaultOptions {
  duration: number
  column: number
}

/**
 * 内部选项
 */
export type InnerOptions = Merge<Options, DefaultOptions> & {
  [key: string]: any
}

/**
 * 合并两个 interface
 * 冲突第二个覆盖第一个
 */
type Merge<
  Type1 extends { [Key: string]: any },
  Type2 extends { [Key: string]: any }
> = {
  [Key in keyof (Type1 & Type2)]: Key extends keyof Type2
    ? Type2[Key]
    : Key extends keyof Type1
    ? Type1[Key]
    : never
}
