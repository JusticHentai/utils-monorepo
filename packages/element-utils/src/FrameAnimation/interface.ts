export interface Options {
  /**
   * 图片 url
   */
  imageUrl: string
  /**
   * 动画总帧数
   */
  frameCount: number
  /**
   * 持续时间 按 ms 计时
   */
  duration: number
  /**
   * 精灵图行数
   */
  rowCount: number
}

export interface AnimationOptions extends Options {
  /**
   * 实例的 canvas
   */
  canvasEl: HTMLCanvasElement
  /**
   * 实例的宽度
   */
  width: number
  /**
   * 实例的高度
   */
  height: number
  /**
   * 帧列表 (ImageBitmap)
   */
  frameList: ImageBitmap[]
  /**
   * 图片 http 下载完成时回调
   */
  onImageLoad?: (imageEl: HTMLImageElement) => any
  /**
   * 每帧回调
   */
  onFrame?: (frame: number) => any
  /**
   * 每播完一次动画回调，times 是当前次数，从 1 开始
   */
  onCompleteOnce?: (times: number) => any
  /**
   * 整体播完回调
   */
  onComplete?: () => any
}
