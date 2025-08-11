import { Options, RESIZE_TYPE } from '../interface'
import getScreenSize from './getScreenSize'

/**
 * 获取当前缩放比例
 * RESIZE_TYPE.WIDTH 只按 preset.width 与当前屏幕 width 的比例来适配 width / preset.width
 * RESIZE_TYPE.HEIGHT 只按 preset.height 与当前屏幕 height 的比例来适配 height / preset.height
 * RESIZE_TYPE.BOTH 按 preset.width 与当前屏幕 width 的比例和 preset.height 与当前屏幕 height 的比例中最小的比例来适配
 * 为了让大屏有更好的呈现方式 当 preset 的值小于当前屏幕的对应值 比例默认是 1
 * 如果想自定义大屏 可以按比例提高 preset 的值
 */
const getCurrentRatio = (options: Options): number => {
  const { type, preset } = options
  const { width, height } = getScreenSize()

  let ratio = 1

  if (type === RESIZE_TYPE.WIDTH && preset?.width) {
    const xRatio = width / preset.width

    ratio = Math.min(xRatio, 1)
  }

  if (type === RESIZE_TYPE.HEIGHT && preset?.height) {
    const yRatio = height / preset.height

    ratio = Math.min(yRatio, 1)
  }

  if (type === RESIZE_TYPE.BOTH && preset?.width && preset?.height) {
    const xRatio = width / preset.width
    const yRatio = height / preset.height

    ratio = Math.min(yRatio, xRatio, 1)
  }

  return ratio
}

export default getCurrentRatio
