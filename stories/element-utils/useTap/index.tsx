import { action } from 'storybook/actions'
import '../../.css/index.css'
import useTap from '../../../packages/element-utils/src/useTap'

const UseTapDemo = () => {
  const handleTap = useTap({
    duration: 1000,
    cb: (count) => {
      action('点击次数统计')(count)
    },
  })

  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={handleTap}
      >
        点击测试（1秒内统计点击次数）
      </div>
    </div>
  )
}

export default UseTapDemo
