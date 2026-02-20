/**
 * 检测当前设备是否为 Apple 设备（Mac、iPhone、iPod、iPad）
 *
 * 通过 `navigator.platform` 或 `navigator.userAgentData.platform` 判断
 *
 * @returns 是否为 Apple 设备
 */
const isAppleDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false

  // 优先使用 userAgentData（navigator.platform 已废弃）
  if ('userAgentData' in navigator) {
    const { platform } = navigator.userAgentData as { platform: string }
    return /mac|ios/i.test(platform)
  }

  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
}

export default isAppleDevice
