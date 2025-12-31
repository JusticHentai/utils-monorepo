import combo from '../../../packages/element-utils/src/combo'

let comboFn: (() => void) | null = null

const basicDemo = () => {
  if (!comboFn) {
    comboFn = combo({
      onCombo: (count) => {
        console.log('连击次数:', count)
      },
      onClose: () => {
        console.log('连击结束')
      },
      duration: 1000,
    })
  }

  comboFn()
  return { message: '已触发连击' }
}

export default basicDemo
