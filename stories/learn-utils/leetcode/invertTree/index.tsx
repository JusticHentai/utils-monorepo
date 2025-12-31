import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const invertTreeDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('翻转二叉树')(res)
        }}
      >
        翻转二叉树
      </div>
    </div>
  )
}

export default invertTreeDemo
