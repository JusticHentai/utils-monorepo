import { action } from 'storybook/actions'
import combo from '../../../packages/element-utils/src/combo'

let comboFn: (() => void) | null = null

const basicDemo = () => {
  if (!comboFn) {
    comboFn = combo({
      onCombo: (count) => {
        action('连击次数')(count)
      },
      onClose: () => {
        action('连击结束')('连击已结束')
      },
      duration: 1000,
    })
  }

  comboFn()
}

export default basicDemo
