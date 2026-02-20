import { action } from 'storybook/actions'
import useDoubleClick from '../../../packages/element-utils/src/useDoubleClick'

const useBasicDemo = () => {
  const { handleClick, handleTouch } = useDoubleClick({
    onCombo: (count) => {
      action('连击')(count + ' 连击')
    },
    onComboEnd: (count) => {
      action('连击结束')('最终连击次数: ' + count)
    },
    delay: 300,
  })

  return {
    handleClick,
    handleTouch,
  }
}

export default useBasicDemo
