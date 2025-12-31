import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const hasCycleDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('环形链表')(res)
        }}
      >
        环形链表检测
      </div>
    </div>
  )
}

export default hasCycleDemo
