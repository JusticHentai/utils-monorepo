import { action } from 'storybook/actions'

const clearCountdownDemo = (clear?: (() => void) | null) => {
  clear?.()

  action('倒计时已清除')()
}

export default clearCountdownDemo
