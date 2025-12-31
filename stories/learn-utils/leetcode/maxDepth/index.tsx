import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const maxDepthDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('二叉树最大深度')(res)
        }}
      >
        二叉树最大深度
      </div>
    </div>
  )
}

export default maxDepthDemo
