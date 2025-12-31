import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const levelOrderDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('二叉树层序遍历')(res)
        }}
      >
        二叉树层序遍历
      </div>
    </div>
  )
}

export default levelOrderDemo
