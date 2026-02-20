/** 清理函数 */
export type CleanupFn = () => void

/** onClickOutside 配置选项 */
export interface OnClickOutsideOptions {
  /** 需要忽略的元素或选择器 */
  ignore?: (Element | string)[]
  /** 是否使用捕获阶段，默认 true */
  capture?: boolean
}
