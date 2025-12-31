import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'

const ResizeDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('初始化 resize 适配')(res.message)
        }}
      >
        初始化 resize 适配
      </div>
    </div>
  )
}

export default ResizeDemo
