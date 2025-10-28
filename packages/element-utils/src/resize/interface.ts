export enum RESIZE_TYPE {
  WIDTH,
  HEIGHT,
  BOTH,
}

export interface Options {
  preset?: {
    width?: number
    height?: number
  }
  type?: RESIZE_TYPE
  cb?: (ctx: Options & { ratio: number }) => any
  debounce?: number
  /**
   * body 是否设置全屏高度
   */
  fullScreen?: boolean
}

export const defaultOptions = {
  preset: {
    width: 1920,
    height: 1080,
  },
  type: RESIZE_TYPE.BOTH,
}
