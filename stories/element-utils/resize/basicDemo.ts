import { action } from 'storybook/actions'
import resize from '../../../packages/element-utils/src/resize'
import { RESIZE_TYPE } from '../../../packages/element-utils/src/resize/interface'

export const createBasicDemo = (
  getCleanup: () => (() => void) | null,
  setCleanup: (fn: (() => void) | null) => void,
) => {
  return () => {
    const prev = getCleanup()
    if (prev) prev()

    const cleanup = resize({
      preset: { width: 1920, height: 1080 },
      type: RESIZE_TYPE.BOTH,
      cb: (ctx) => {
        const info = document.getElementById('resize-info')
        if (info) info.textContent = `当前 ratio: ${ctx.ratio.toFixed(4)}`

        action('resize 回调')({ ratio: ctx.ratio })
      },
    })

    setCleanup(cleanup)

    action('默认适配 (BOTH)')('已初始化, 预设 1920x1080, 取宽高最小比例')
  }
}
