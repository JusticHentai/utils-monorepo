import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'

const CanvasDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('Canvas 类用法')(res)
        }}
      >
        查看 Canvas 类用法
      </div>
    </div>
  )
}

export default CanvasDemo
