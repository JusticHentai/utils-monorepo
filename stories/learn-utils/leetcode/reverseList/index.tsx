import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const reverseListDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('反转链表')(res)
        }}
      >
        反转链表 [1,2,3,4,5]
      </div>
    </div>
  )
}

export default reverseListDemo
