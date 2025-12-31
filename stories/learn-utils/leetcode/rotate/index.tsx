import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const rotateDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('旋转图像')(res)
        }}
      >
        旋转图像 90°
      </div>
    </div>
  )
}

export default rotateDemo
