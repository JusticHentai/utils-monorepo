import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'

const VisibilityDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('添加可见性监听')(res.message)
        }}
      >
        添加可见性监听
      </div>
    </div>
  )
}

export default VisibilityDemo
