export default interface ComboOptions {
  /**
   * 连击回调
   * @param combo 连击次数
   */
  onCombo: (combo?: number) => void
  /**
   * 连击结束回调
   */
  onClose: () => void
  /**
   * 连击时长
   */
  duration: number
}
