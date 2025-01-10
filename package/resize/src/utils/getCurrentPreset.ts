import { ResizePreset } from '../types'
import getScreenSize from './getScreenSize'

/**
 * 当前预设的宽度和高度
 */
export interface GetCurrentPresetResult {
  width: number
  height: number
}

/**
 * 获取当前屏幕 是横屏还是竖屏 返回参数
 */
export default function getCurrentPreset(
  preset: ResizePreset
): GetCurrentPresetResult {
  const { horizontal, vertical } = preset

  if (horizontal && vertical) {
    const { width, height } = getScreenSize()

    return width >= height ? horizontal : vertical
  }

  if (horizontal) {
    return horizontal
  }

  if (vertical) {
    return vertical
  }

  return {
    width: 0,
    height: 0,
  }
}
