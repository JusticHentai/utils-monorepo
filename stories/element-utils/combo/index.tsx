import { useMemo } from 'react'
import { action } from 'storybook/actions'
import '../../.css/index.css'
import combo from '../../../packages/element-utils/src/combo'

const ComboDemo = () => {
  const comboClick = useMemo(() => {
    return combo({
      onCombo: (count) => {
        action('连击次数')(count)
      },
      onClose: () => {
        action('连击结束')('连击已结束')
      },
      duration: 1000,
    })
  }, [])

  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={comboClick}
      >
        点击连击（1秒内连续点击）
      </div>
    </div>
  )
}

export default ComboDemo
