import { action } from 'storybook/actions'
import resize from '../../../packages/element-utils/src/resize'
import { RESIZE_TYPE } from '../../../packages/element-utils/src/resize/interface'

export const createWidthOnlyDemo = (
  getCleanup: () => (() => void) | null,
  setCleanup: (fn: (() => void) | null) => void,
) => {
  return () => {
    const prev = getCleanup()
    if (prev) prev()

    const cleanup = resize({
      preset: { width: 1920 },
      type: RESIZE_TYPE.WIDTH,
      debounce: 200,
      cb: (ctx) => {
        const info = document.getElementById('resize-info')
        if (info) info.textContent = `当前 ratio: ${ctx.ratio.toFixed(4)} (仅宽度)`

        action('resize 回调')({ ratio: ctx.ratio })
      },
    })

    setCleanup(cleanup)

    action('仅宽度适配 (WIDTH)')('已初始化, 仅按宽度比例适配, 防抖 200ms')
  }
}
