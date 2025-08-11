/**
 * visible: 页面可见时触发
 * hidden: 页面不可见时触发
 */
export interface Options {
  visible?: () => void
  hidden?: () => void
}
