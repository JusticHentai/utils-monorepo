import { InnerOptions } from '../types'
import getScreenSize from './getScreenSize'

/**
 * 处理回调函数
 */
export default function handleCb(options: InnerOptions & { ratio: number }) {
  const { resizeCallback } = options

  const { width, height } = getScreenSize()

  resizeCallback?.({
    size: width >= height ? 'horizontal' : 'vertical',
    width,
    height,
    ...options,
  })
}
