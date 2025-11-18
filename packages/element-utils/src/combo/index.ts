import ComboOptions from './interface'

/**
 * 连击
 */
const combo = (options: ComboOptions) => {
  const { onCombo, onClose, duration } = options

  let combo = 0
  let timer: NodeJS.Timeout | null = null

  return () => {
    combo++
    onCombo(combo)

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      combo = 0
      onClose()
      timer = null
    }, duration)
  }
}

export default combo
