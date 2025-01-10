import { ResizeType } from '../types'
import getScreenSize from './getScreenSize'

export interface Options {
  resizeType: ResizeType
  preset: {
    width: number
    height: number
  }
}

/**
 * 获取当前缩放比例
 */
export default function getCurrentRatio(options: Options): number {
  const { resizeType, preset } = options
  const { width, height } = getScreenSize()

  let ratio = 1

  if (resizeType === 'x') {
    const xRatio = width / preset['width']

    ratio = Math.min(xRatio, 1)
  }

  if (resizeType === 'y') {
    const yRatio = height / preset['height']

    ratio = Math.min(yRatio, 1)
  }

  if (resizeType === 'all') {
    const xRatio = width / preset['width']
    const yRatio = height / preset['height']
    ratio = Math.min(yRatio, xRatio, 1)
  }

  return ratio
}
