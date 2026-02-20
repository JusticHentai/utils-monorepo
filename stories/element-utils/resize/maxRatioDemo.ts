import { action } from 'storybook/actions'
import resize from '../../../packages/element-utils/src/resize'
import { RESIZE_TYPE } from '../../../packages/element-utils/src/resize/interface'

export const createMaxRatioDemo = (
  getCleanup: () => (() => void) | null,
  setCleanup: (fn: (() => void) | null) => void,
) => {
  return () => {
    const prev = getCleanup()
    if (prev) prev()

    const cleanup = resize({
      preset: { width: 1920, height: 1080 },
      type: RESIZE_TYPE.BOTH,
      maxRatio: Infinity,
      cb: (ctx) => {
        const info = document.getElementById('resize-info')
        if (info) info.textContent = `当前 ratio: ${ctx.ratio.toFixed(4)} (无上限)`

        action('resize 回调')({ ratio: ctx.ratio })
      },
    })

    setCleanup(cleanup)

    action('允许放大 (maxRatio: Infinity)')(
      '已初始化, 大屏时 ratio 可超过 1',
    )
  }
}
