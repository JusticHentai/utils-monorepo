import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const mergeTwoListsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('合并两个有序链表')(res)
        }}
      >
        合并两个有序链表
      </div>
    </div>
  )
}

export default mergeTwoListsDemo
