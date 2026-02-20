export enum RESIZE_TYPE {
  WIDTH,
  HEIGHT,
  BOTH,
}

export interface ResizeOptions {
  preset?: {
    width?: number
    height?: number
  }
  type?: RESIZE_TYPE
  cb?: (ctx: ResizeOptions & { ratio: number }) => any
  debounce?: number
  /**
   * body 是否设置全屏高度
   */
  fullScreen?: boolean
  /**
   * 最大缩放比例, 默认 1 (大屏不放大)
   * 设置为 Infinity 则不限制放大
   */
  maxRatio?: number
}

export const defaultOptions = {
  preset: {
    width: 1920,
    height: 1080,
  },
  type: RESIZE_TYPE.BOTH,
  maxRatio: 1,
}
